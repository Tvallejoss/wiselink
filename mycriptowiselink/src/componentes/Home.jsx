import React from "react";
import "../styles/./Home.css";
import { Carteras } from "./Carteras"

export const Home = () => {
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


            <div className="carteras">
            <Carteras/>
            <Carteras/>  <Carteras/>  <Carteras/>  <Carteras/>   <Carteras/>  <Carteras/>  <Carteras/>
            </div>
        </div>
    );
};
