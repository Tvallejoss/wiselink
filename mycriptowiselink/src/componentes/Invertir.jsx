import React, { useEffect, useState } from "react";
import "../styles/./Invertir.css";
import { useNavigate } from "react-router-dom";

export const Invertir = () => {
    const navigate = useNavigate();
    const [cryptoToInvest, setCryptoToInvest] = useState();
    const [myProfileData, setMyProfileData] = useState({});

    const date = new Date();
    const CompleteDate =
        date.getDate() +
        "-" +
        date.getMonth() +
        "-" +
        date.getFullYear() +
        " " +
        date.getHours() +
        ":" +
        date.getMinutes() +
        "Hs";

    useEffect(() => {
        setCryptoToInvest({
            ...JSON.parse(localStorage.getItem("cryptoToInvestLS")),
            quantity: "0",
            date: CompleteDate,
        });
        const myProfileDataLS = JSON.parse(
            localStorage.getItem("myProfileData")
        );
        if (myProfileDataLS) {
            setMyProfileData(myProfileDataLS);
        }
    }, []);

    const AddCrypto = () => {
        const newCryptoInWallet = cryptoToInvest;
        const cryptos = JSON.parse(localStorage.getItem("myWalletCrypto"));
        if (newCryptoInWallet.quantity === "0") return;
        if (cryptos.length) {
            let moneyQuantity = 0;
            //Logica para saber si ya existe esa coin en la wallet y agregar unicamente la cantidad correspondiente
            let coinIndex;
            cryptos.forEach((coin, i) => {
                if (coin.id === newCryptoInWallet.id) {
                    coinIndex = i;
                }
            });
            if (coinIndex >= 0) {
                cryptos[coinIndex] = {
                    ...cryptos[coinIndex],
                    quantity:
                        cryptos[coinIndex].quantity++ +
                        newCryptoInWallet.quantity++,
                    date: CompleteDate,
                };
                moneyQuantity +=
                    newCryptoInWallet.current_price *
                    newCryptoInWallet.quantity;
            } else {
                cryptos.push({
                    ...newCryptoInWallet,
                    quantity: newCryptoInWallet.quantity,
                    date: CompleteDate,
                });
                moneyQuantity +=
                    newCryptoInWallet.current_price *
                    newCryptoInWallet.quantity;
            }

            localStorage.setItem(
                "myProfileData",
                JSON.stringify({
                    ...myProfileData,
                    moneyToInvert:
                        myProfileData.moneyToInvert++ - moneyQuantity,
                })
            );
            localStorage.setItem("myWalletCrypto", JSON.stringify(cryptos));
            navigate("/myWallet");
            return;
        }

        //Agregar Nuevo Valor y reducir "your money"
        cryptos.push({
            ...newCryptoInWallet,
            quantity: newCryptoInWallet.quantity,
            date: CompleteDate,
        });

        localStorage.setItem(
            "myProfileData",
            JSON.stringify({
                ...myProfileData,
                moneyToInvert:
                    myProfileData.moneyToInvert++ -
                    newCryptoInWallet.quantity++ * cryptos[0].current_price,
            })
        );
        localStorage.setItem("myWalletCrypto", JSON.stringify(cryptos));
        navigate("/myWallet");
    };

    const selectQuantity = ({ target }) => {
        if (!target.value) return;
        setCryptoToInvest({
            ...JSON.parse(localStorage.getItem("cryptoToInvestLS")),
            quantity: target.value,
        });
    };

    return (
        <>
            {cryptoToInvest ? (
                <>
                    <div className="container">
                        <div className="invertirContenido">
                            <div className="seleccion" id="seleccion">
                                <div className="info">
                                    <img
                                        src={cryptoToInvest.image}
                                        alt=""
                                        id="img"
                                    />
                                    <h2 id="coin">{cryptoToInvest.name}</h2>
                                    <span className="precio" id="precio">
                                        $ {cryptoToInvest.current_price}
                                    </span>

                                    <div className="fila">
                                        <div className="cantidad">
                                            <label>Quantity</label>
                                            <select
                                                name=""
                                                id=""
                                                onChange={selectQuantity}
                                                className="select"
                                            >
                                                {/* <option value="">0</option> */}
                                                <option value="">select</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                        <button onClick={AddCrypto}>
                                            ADD TO WALLET
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <></>
            )}
        </>
    );
};

/* 

let data = [
    {id: 1, cant:2} , {id:2 , cant:1} , {id:1 , cant : 1},{id:2 , cant:2}, {id:3 , cant : 2}]

    let nuevo= [];

data.map((info, index )=>{

    for(let i = index+1; i < data.length ; i ++){

        if(info.id === data[i].id){

            nuevo.push({
                ...info, cant: info.cant + data[i].cant
            })
        }
    }
})


nuevo.map((info, index)=>{

    for (let i = index+1; i < data.length;  i++){
            if(info.id !== data[i].id){
                nuevo.push(data[i])
            }
    }
    
})


*/
