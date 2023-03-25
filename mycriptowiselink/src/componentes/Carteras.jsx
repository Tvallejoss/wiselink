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
        console.log(
            "Estado Anterior:",
            ModalEstado,
            "Estado Nuevo seteado :",
            !ModalEstado
        );
        setModalEstado(!ModalEstado);
    };

    return (
        <>
            <div className="Card" onClick={newModalValue}>
                <div className="cardImage">
                    <img src={crypto.image} alt="" />
                </div>

                <div className="cardInfo">
                    <h1>{crypto.name}</h1>
                </div>
            </div>
            <Modal
                ModalEstado={ModalEstado}
                newModalValue={newModalValue}
                crypto={crypto}
            />
        </>
    );
};
