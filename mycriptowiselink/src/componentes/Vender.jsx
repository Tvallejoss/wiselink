import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Vender = () => {
    const navigate = useNavigate();
    const [cryptoToDelete, setCryptoToDelete] = useState();
    const [myProfileData, setMyProfileData] = useState({});
    const [optionSelected, setOptionSelected] = useState();

    const [options, setOptions] = useState([]);

    useEffect(() => {
        const coin = JSON.parse(localStorage.getItem("cryptoToDeleteLS"));
        setCryptoToDelete(coin);
        setMyProfileData(JSON.parse(localStorage.getItem("myProfileData")));

        let optionsNumbers = [];

        if (coin && coin.quantity) {
            for (let i = 1; i <= coin.quantity - 1; i++) {
                if (i === 1) optionsNumbers.push("select");
                optionsNumbers.push(i);
            }
            setOptions(optionsNumbers);
        }
    }, []);

    const selectQuantityToDelete = ({ target }) => {
        if (!target.value) return;
        setOptionSelected(target.value);
    };
    const Delete = () => {
        const cryptos = JSON.parse(localStorage.getItem("myWalletCrypto"));
        console.log("CRYPTOs EN LA WALLET", cryptos);

        console.log("OPCION SELECCIONADA A BORRAR", optionSelected);

        console.log("estado de Crypto a borrar", cryptoToDelete);

        if (!optionSelected) return;
        let coinIndex;
        cryptos.forEach((coin, i) => {
            if (coin.id === cryptoToDelete.id) {
                coinIndex = i;
            }
        });

        console.log("Crypto agregada al arreglo de wallet", cryptos, cryptos[coinIndex]);

        //para cuando "vendes" todas tus monedas
        if (cryptos[coinIndex].quantity - optionSelected <= 0) {
            const nuevasCryptos = cryptos.filter(
                (coin) => coin.id !== cryptoToDelete.id
            );

                console.log("ENTRE A ESTE");

            localStorage.setItem(
                "myWalletCrypto",
                JSON.stringify(nuevasCryptos)
            );

            // if (cryptoToDelete.quantity === 1) {
            //     localStorage.setItem(
            //         "myProfileData",
            //         JSON.stringify({
            //             ...myProfileData,
            //             moneyToInvert:
            //                 myProfileData.moneyToInvert++ +
            //                 cryptoToDelete.current_price,
            //         })
            //     );
            //     navigate("/myWallet");
            //     return;
            // }

            localStorage.setItem(
                "myProfileData",
                JSON.stringify({
                    ...myProfileData,
                    moneyToInvert:
                        myProfileData.moneyToInvert++ +
                        cryptoToDelete.current_price *
                            (cryptos[coinIndex].quantity++ ),
                })
            );

            navigate("/myWallet");
            return;
        }

        cryptos[coinIndex] = {
            ...cryptos[coinIndex],
            quantity: cryptos[coinIndex].quantity - optionSelected,
        };
        localStorage.setItem("myWalletCrypto", JSON.stringify(cryptos));

        localStorage.setItem(
            "myProfileData",
            JSON.stringify({
                ...myProfileData,
                moneyToInvert:
                    myProfileData.moneyToInvert++ +
                    cryptoToDelete.current_price *
                        (cryptos[coinIndex].quantity++ - optionSelected ),
            })
        );
        navigate("/myWallet");
    };

    return (
        <>
            {cryptoToDelete ? (
                <>
                    <div className="container">
                        <div className="invertirContenido">
                            <div className="seleccion" id="seleccion">
                                <div className="info">
                                    <img
                                        src={cryptoToDelete.image}
                                        alt=""
                                        id="img"
                                    />
                                    <h2 id="coin">{cryptoToDelete.name}</h2>
                                    <span className="precio" id="precio">
                                        $ {cryptoToDelete.current_price}
                                    </span>

                                    <div className="fila">
                                        <div className="cantidad">
                                            <label>Quantity to Sell</label>
                                            <select
                                                name=""
                                                id=""
                                                onChange={
                                                    selectQuantityToDelete
                                                }
                                            >
                                                {/* <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option> */}

                                                {options.map((num) => (
                                                    <option
                                                        value={num}
                                                        key={num}
                                                    >
                                                        {num}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <button onClick={Delete}>Sell</button>
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
