import React from "react";
import styled from "styled-components";

export const Modal = ({crypto , ModalStado, setModalEstado }) => {
 


    return (
        <>
            {ModalStado && (
                <Overlay>
                    <ContenedorModal>
                        <EncabezadoModal>
                            <h3>{crypto.name}</h3>
                            <BotonCerrar onClick = { () => setModalEstado(false)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-x"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </BotonCerrar>
                        </EncabezadoModal>

                        <h1>{crypto.name}</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            e.
                        </p>

                        <BotonAceptar>Agregar</BotonAceptar>
                    </ContenedorModal>
                </Overlay>
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
    width: 500px;
    min-height: 100px;
    background: #1b1b1b;
    position: relativve;
    border-radius: 5px;
    box-shadow: -5px 11px 25px -8px #ffff;
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
    border: none;
    width: 30px;
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
