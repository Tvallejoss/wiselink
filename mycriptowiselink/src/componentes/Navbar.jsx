import React from "react";
import "../styles/./Navbar.css";

export const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="navbarLogo">
                {/* <img src="https://cdn.discordapp.com/attachments/840217064978907170/1088873730928803921/icons8-bitcoin-accepted-64.png" /> */}
                <h1>CRIPTO MARKET</h1>
            </div>

            <div className="navbarNombre">
                <h1>Hi <span>Tomas </span></h1>
            </div>
        </div>
    );
};
