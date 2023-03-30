import React, { useEffect, useState } from "react";
import "../styles/./Home.css";
import { Carteras } from "./Carteras";
import { cryptosData } from "../data";

import axios from "axios";

export const Home = () => {
    const [CryptoCurrency, setCryptoCurrency] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        //Para que no siga haciendo pedidos a la API al momendo de desarrollar
        if (JSON.parse(localStorage.getItem("CryptoCurrencyStorage"))) {
            setCryptoCurrency(
                JSON.parse(localStorage.getItem("CryptoCurrencyStorage"))
            );
            if (search) {
                const filteredCoins = CryptoCurrency.filter((coin) =>
                    coin.name.toLowerCase().includes(search.toLowerCase())
                );
                setCryptoCurrency(filteredCoins);
                return;
            }

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
                // console.log(data);
            })
            .catch((err) => {
                console.log("No se pudo conectar con coin/markets ", err);

                //seteo una simulacion de cryptomonedas para poder seguir desarrollando si la API no contesta
                setCryptoCurrency(cryptosData);
                localStorage.setItem(
                    "CryptoCurrencyStorage",
                    JSON.stringify(cryptosData)
                );
                if (!JSON.parse(localStorage.getItem("myWalletCrypto"))) {
                    localStorage.setItem("myWalletCrypto", JSON.stringify([]));
                }
            });
    }, [search]);

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
                    className="form-control bg-dark text-light border-0 mt-4 text-center buscador"
                    autoFocus
                    onChange={(e) => setSearch(e.target.value)}
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
