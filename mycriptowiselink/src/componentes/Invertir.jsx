import React, { useEffect, useState } from "react";
import "../styles/./Invertir.css";
import { useNavigate } from "react-router-dom";

export const Invertir = () => {
    const navigate = useNavigate();
    const [cryptoToInvest, setCryptoToInvest] = useState();
    const [QuantityState, setQuantityState] = useState("1");

    useEffect(() => {
        const date = new Date();
        const CompleteDate =
            date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();

        setCryptoToInvest({
            ...JSON.parse(localStorage.getItem("cryptoToInvestLS")),
            quantity: "1",
            date: CompleteDate,
        });
    }, []);

    const AddCrypto = () => {
        const newCryptoInWallet = cryptoToInvest;
        const cryptos = JSON.parse(localStorage.getItem("myWalletCrypto"));

        if (cryptos.length) {
            //Logica para saber si ya existe esa coin en la wallet y agregar unicamente la cantidad correspondiente
            const newCryptos = cryptos.map((coin) => {
                if (coin.id === newCryptoInWallet.id) {
                    return {
                        ...coin,
                        quantity:
                            coin.quantity++ + newCryptoInWallet.quantity++,
                    };
                }
                return newCryptoInWallet;
            });
            console.log("CRYPTOS ADD", newCryptos);
            localStorage.setItem("myWalletCrypto", JSON.stringify(newCryptos));
            navigate("/myWallet");

            return;
        }

        //Agregar Nuevo Valor
        cryptos.push(newCryptoInWallet);
        localStorage.setItem("myWalletCrypto", JSON.stringify(cryptos));
        navigate("/myWallet");
    };

    const selectQuantity = ({ target }) => {
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
                                            >
                                                {/* <option value="">0</option> */}
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
