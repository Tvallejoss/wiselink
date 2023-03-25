import React, { useState } from "react";
import "../styles/./Carteras.css";
import { Modal } from "./Modal";
export const Carteras = ({ crypto, i, setCryptoSearch }) => {
    const [ModalEstado, setModalEstado] = useState(false);

    const AddCrypto = () => {
        const newCryptoInWallet = crypto;
        const cryptos = JSON.parse(localStorage.getItem("myWalletCrypto"));
        if (cryptos.length) {
            cryptos.push(newCryptoInWallet);
            localStorage.setItem("myWalletCrypto", JSON.stringify(cryptos));
            return;
        }
        //Agregar Nuevo Valor
        cryptos.push(newCryptoInWallet);
        localStorage.setItem("myWalletCrypto", JSON.stringify(cryptos));
    };

    const newModalValue = () => {
        setModalEstado(!ModalEstado);
    };

    return (
        <div className="Card" onClick={newModalValue}>
            <div className="cardImage">
                <img src={crypto.image} alt="" />
            </div>

            <div className="cardInfo">
                <h1>{crypto.name}</h1>
                {/* <p>Current Price: {crypto.current_price}</p>
                <p>Price Change: {crypto.price_change_24h}</p>
                <p>
                    Price Change Percentage:{" "}
                    {crypto.price_change_percentage_24h}
                </p>
                <p>Total Volume: {crypto.total_volume}</p> */}
            </div>

            {/* <div className="cardButton">
                <p onClick={AddCrypto}>Add to your wallet </p>
            </div> */}

            <Modal
                ModalEstado={ModalEstado}
                setModalEstado={setModalEstado}
                crypto={crypto}
            />
        </div>
    );
};
