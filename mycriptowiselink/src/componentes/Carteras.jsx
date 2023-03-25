import React, { useEffect, useState } from "react";
import "../styles/./Carteras.css";
import { Modal } from "./Modal";
export const Carteras = ({ crypto, i }) => {
    const [ModalStado, setModalEstado] = useState(false);

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

    return (
        <div className="Card" onClick={() => setModalEstado(true)}>
            <div className="cardImage">
                <img src={crypto.image} alt="" />
            </div>

            <div className="cardInfo">
                <h1>{crypto.name}</h1>
                <p>Current Price: {crypto.current_price}</p>
                <p>Price Change: {crypto.price_change_24h}</p>
                <p>
                    Price Change Percentage:{" "}
                    {crypto.price_change_percentage_24h}
                </p>
                <p>Total Volume: {crypto.total_volume}</p>
            </div>

            <div className="cardButton">
                <p onClick={AddCrypto}>Add to your wallet </p>
            </div>

            <Modal ModalStado={ModalStado} setModalEstado={setModalEstado} crypto = {crypto} />
        </div>
    );
};
