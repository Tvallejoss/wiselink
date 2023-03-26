import React, { useEffect, useState } from "react";
import "../styles/./Invertir.css";

export const Invertir = () => {
    const [cryptoToInvest, setCryptoToInvest] = useState({});

    useEffect(() => {
        setCryptoToInvest(JSON.parse(localStorage.getItem("cryptoToInvestLS")));
    }, []);

    return (
        <div className="container">
            <div className="invertirContenido">
                <h1>{cryptoToInvest.name}</h1>
            </div>
        </div>
    );
};
