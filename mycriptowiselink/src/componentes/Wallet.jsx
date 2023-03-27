import React, { useEffect, useState } from "react";
import "../styles/./Wallet.css";
const titles = [
    "#",
    "Coin",
    "Quantity ",
    "Price",
    "Price Change",
    "24h Volume",
    "Date of purchase",
    "Total Price",
    "Accions"
];

export const Wallet = () => {
    const cryptos = JSON.parse(localStorage.getItem("myWalletCrypto"));
    const [myProfileData, setMyProfileData] = useState({});

    useEffect(() => {
        const myProfileDataLS = JSON.parse(
            localStorage.getItem("myProfileData")
        );
        if (myProfileDataLS) {
            setMyProfileData(myProfileDataLS);
        }
    }, []);

    if (!cryptos) return <div>no coins</div>;

    return (
        <div className="container" id="Wallet">
            <h1 className= "moneyQuantity">Your Money: <span className="quantity"> ${myProfileData.moneyToInvert}</span> </h1>

            <table className="table table-dark mt-4 table-hover">
                <thead>
                    <tr>
                        {titles.map((title, i) => (
                            <td key={i}>{title}</td>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {cryptos.map((coin, index) => (
                        <tr key={index}>
                            <td className="text-muted">{index}</td>
                            <td>
                                <img
                                    src={coin.image}
                                    alt=""
                                    className="img-fluid me-4"
                                    style={{ width: "3%" }}
                                />
                                <span>{coin.name}</span>
                                <span className="ms-3 text-muted">
                                    {coin.symbol}
                                </span>
                            </td>
                            <td>{coin.quantity}</td>

                            <td>${coin.current_price.toLocaleString()}</td>

                            <td
                                className={
                                    coin.price_change_percentage_24h > 0
                                        ? "text-success"
                                        : "text-danger"
                                }
                            >
                                {coin.price_change_percentage_24h}
                            </td>

                            <td>${coin.total_volume.toLocaleString()}</td>

                            <td>{coin.date}</td>
                            <td>${coin.current_price++ * coin.quantity++}</td>


                            <td>
                                
                                <button className="buttonSell">Sell</button>
                                </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
