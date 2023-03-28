import React, { useEffect, useState } from "react";
import "../styles/./Navbar.css";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
    const { pathname } = useLocation();
    const [myProfileData, setMyProfileData] = useState({});

    useEffect(() => {
        const myProfileDataLS = JSON.parse(
            localStorage.getItem("myProfileData")
        );
        if (!myProfileDataLS) {
            //Perfil Data (para simular la informacion de un usuario)
            localStorage.setItem(
                "myProfileData",
                JSON.stringify({
                    name: "Tomass",
                    moneyToInvert: "500000",
                    email: "tomas@gmail.com",
                })
            );
            setMyProfileData(JSON.parse(localStorage.getItem("myProfileData")));
            return;
        }
        setMyProfileData(myProfileDataLS);
    }, []);

    return (
        <div className="Navbar">
            <div className="navbarLogo">
                <h1>CRIPTO-MARKET</h1>
            </div>

            <div className="navbarNombre">
                {pathname === "/" ? (
                    <>
                        <Link to="/myWallet" className="myWalletStyle">
                            <h1>
                                <span>My Wallet </span>{" "}
                            </h1>
                        </Link>
                    </>
                ) : (
                    <> </>
                )}

                {pathname === "/myWallet" ? (
                    <>
                        <Link to="/" className="myWalletStyle">
                            <h1>
                                <span>Home </span>{" "}
                            </h1>
                        </Link>
                    </>
                ) : (
                    <></>
                )}

                {pathname === "/invest" || pathname === "/sell" ? (
                    <>
                        <Link to="/" className="myWalletStyle">
                            <h1>
                                <span>Home </span>{" "}
                            </h1>
                        </Link>
                        <Link to="/myWallet" className="myWalletStyle">
                            <h1>
                                <span>My Wallet </span>{" "}
                            </h1>
                        </Link>
                    </>
                ) : (
                    <></>
                )}
                {/* 
                <h1>
                    <span>Coins </span>
                </h1> */}

                {myProfileData.name ? (
                    <h1>
                        ¡Hi <span>{myProfileData.name} </span>!
                    </h1>
                ) : (
                    <> eeee {myProfileData.name}</>
                )}
            </div>
        </div>
    );
};
