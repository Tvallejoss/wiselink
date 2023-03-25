import React, { useEffect, useState } from "react";
import "../styles/./Home.css";
import { Carteras } from "./Carteras";
import axios from "axios";

export const Home = () => {
    const [CryptoCurrency, setCryptoCurrency] = useState([]);
    const [CryptoSearch, setCryptoSearch] = useState("");

    useEffect(() => {
        // if (CryptoSearch) {
        //     const newCryptoCurrency = CryptoCurrency.filter((CRYPTO) => {
        //         return CRYPTO.name
        //             .toLowerCase()
        //             .includes(CryptoSearch.toLowerCase());
        //     });

        //     setCryptoCurrency(newCryptoCurrency);
        // }
        console.log("entre pero sin if");
        axios
            .get(
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false"
            )
            .then(({ data }) => {
                setCryptoCurrency(data);
                console.log(data);
            })
            .catch((err) => console.log("ERRORR ", err));
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

            <h1> - Cryptocurrency Wallets -</h1>

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
