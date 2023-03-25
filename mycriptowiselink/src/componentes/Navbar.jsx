import React from "react";
import "../styles/./Navbar.css";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
    const { pathname } = useLocation();

    return (
        <div className="Navbar">
            <div className="navbarLogo">
                {/* <img src="https://cdn.discordapp.com/attachments/840217064978907170/1088873730928803921/icons8-bitcoin-accepted-64.png" /> */}
                <h1>CRIPTO-MARKET</h1>
            </div>

            <div className="navbarNombre">
                {pathname === "/myWallet" ? (
                    <>
                        <Link to="/">
                            <h1>
                                <span>Home </span>{" "}
                            </h1>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link to="/myWallet">
                            <h1>
                                <span>My Wallet </span>{" "}
                            </h1>
                        </Link>
                    </>
                )}

                <h1>
                    <span>Coins </span>
                </h1>

                <h1>
                    ¡Hi <span>Tomas </span>!
                </h1>
            </div>
        </div>
    );
};
