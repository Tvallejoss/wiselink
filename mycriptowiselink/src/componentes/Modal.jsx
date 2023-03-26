import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../styles/./Modal.css";

export const Modal = ({ ModalEstado, newModalValue, crypto }) => {
    
    const addCryptoToInvestToLS = () => {
        if (JSON.parse(localStorage.getItem("cryptoToInvestLS"))) {
            localStorage.setItem("cryptoToInvestLS", JSON.stringify(crypto));
            return;
        }
        localStorage.setItem("cryptoToInvestLS", JSON.stringify(crypto));
    };

    return (
        <>
            {ModalEstado ? (
                <Overlay>
                    <ContenedorModal>
                        <EncabezadoModal>
                            <h3>Cripto-Market</h3>
                            <BotonCerrar>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-x"
                                    viewBox="0 0 16 16"
                                    onClick={newModalValue}
                                >
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </BotonCerrar>
                        </EncabezadoModal>

                        <h1>{crypto.name}</h1>
                        <div className="cardInfo">
                            <img src={crypto.image} alt="" />
                            <br />
                            <p>Current Price: {crypto.current_price}</p>
                            <p>Price Change: {crypto.price_change_24h}</p>
                            <p>
                                Price Change Percentage:{" "}
                                {crypto.price_change_percentage_24h}
                            </p>
                            <p>Total Volume: {crypto.total_volume}</p>
                        </div>

                            <Link to="/invest" className="investStyle">
                        <BotonAceptar onClick={addCryptoToInvestToLS}>
                            {" "}
                                {" "}
                                ¡INVEST!{" "}
                        </BotonAceptar>
                            </Link>{" "}
                    </ContenedorModal>
                </Overlay>
            ) : (
                <> </>
            )}
        </>
    );
};

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContenedorModal = styled.div`
    width: 60%;
    min-height: 400px;
    background: #1b1b1b;
    position: relativve;
    border-radius: 5px;
    box-shadow:    -12px -5px 14px 4px rgba(0,0,0,0.75);
    padding: 20px;
`;

const EncabezadoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #e8e8e8;

    h3 {
        font-weight: 500;
        font-size: 16px;
        color: #f27220;
    }
`;

const BotonCerrar = styled.button`
    border: none;
    width: 50px;
    height: 50px;
    background: none;
    cursor: pointer;
    transition: 0.3s ease all;
    border-radius: 5px;
    color: #ffff;

    svg {
        width: 100%;
        height: 100%;
    }
`;

const BotonAceptar = styled.button`
    border: 1px solid #f27220;
    width: 20%;
    height: 30px;
    background: none;
    cursor: pointer;
    transition: 0.3s ease all;
    border-radius: 5px;
    color: #ffff;

    svg {
        width: 100%;
        height: 100%;
    }
`;
