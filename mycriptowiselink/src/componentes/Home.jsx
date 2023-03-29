import React, { useEffect, useState } from "react";
import "../styles/./Home.css";
import { Carteras } from "./Carteras";

import axios from "axios";

export const Home = () => {
    const [CryptoCurrency, setCryptoCurrency] = useState([]);
    const [CryptoSearch, setCryptoSearch] = useState("");

    useEffect(() => {
        //Para que no siga haciendo pedidos a la API al momendo de desarrollar
        if (JSON.parse(localStorage.getItem("CryptoCurrencyStorage"))) {
            setCryptoCurrency(
                JSON.parse(localStorage.getItem("CryptoCurrencyStorage"))
            );
            return;
        }

        axios
            .get(
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false"
            )
            .then(({ data }) => {
                setCryptoCurrency(data);
                localStorage.setItem(
                    "CryptoCurrencyStorage",
                    JSON.stringify(data)
                );
                if (!JSON.parse(localStorage.getItem("myWalletCrypto"))) {
                    localStorage.setItem("myWalletCrypto", JSON.stringify([]));
                }
                console.log(data);
            })
            .catch((err) => {
                console.log("No se pudo conectar con coin/markets ", err);
                const data = [
                    {
                        id: "bitcoin",
                        name: "Bitcoin",
                        current_price: "10000",
                        image: "https://cdn.discordapp.com/attachments/840217064978907170/1090648579686793346/favpng_bitcoin-cash-logo.png",
                        price_change_24h: "0.005",
                        price_change_percentage_24h: "0.3",
                        total_volume: "40",
                    },
                    {
                        id: "doge",
                        name: "Doge",
                        current_price: "3000",
                        image: "https://cdn.discordapp.com/attachments/840217064978907170/1090649067492741240/favpng_shiba-inu-dogecoin-bitcoin-digital-currency.png",
                        price_change_24h: "-1.005",
                        price_change_percentage_24h: "0.0012",
                        total_volume: "2",
                    },
                ];
                //seteo una simulacion de cryptomonedas para poder seguir desarrollando
                setCryptoCurrency(data);
                localStorage.setItem(
                    "CryptoCurrencyStorage",
                    JSON.stringify(data)
                );
                if (!JSON.parse(localStorage.getItem("myWalletCrypto"))) {
                    localStorage.setItem("myWalletCrypto", JSON.stringify([]));
                }
            });
    }, []);

    const search = (e) => {
        setCryptoSearch(e.target.value);
    };

    return (
        <div className="plantillas">
            <div className="plantillaPrincipal">
                <div id="CRIPTO">
                    <img
                        src="https://cdn.discordapp.com/attachments/840217064978907170/1088946639688978462/favpng_cryptocurrency-wallet-cryptocurrency-exchange-digital-currency-blockchain.png"
                        alt=""
                    />
                </div>

                <div id="CriptoInfo">
                    <h1>Cryptocurrency</h1>
                    <p>
                        Choose to invest in the fastest and safest way for your
                        future.
                    </p>
                </div>
            </div>
            <div className="line">
                <hr />
            </div>

            <h1> - Cryptocurrencies - </h1>

            <div className="buttonSearch">
                <input
                    type="text"
                    placeholder="Search a Coin"
                    className="form-control bg-dark text-light border-0 mt-4 text-center"
                    autoFocus
                    onChange={search}
                />
            </div>
            <div className="carteras">
                {CryptoCurrency.length ? (
                    CryptoCurrency.map((crypto, i) => {
                        return <Carteras crypto={crypto} key={i} />;
                    })
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};
