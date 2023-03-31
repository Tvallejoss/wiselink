import React, { useState } from "react";
import "../styles/./Carteras.css";
import { Modal } from "./Modal";
export const Carteras = ({ crypto, i, setCryptoSearch }) => {
    const [ModalEstado, setModalEstado] = useState(false);

    const newModalValue = () => {
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
