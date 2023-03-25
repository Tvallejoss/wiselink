import React from "react";
import "../styles/./Carteras.css";
export const Carteras = ({ crypto ,i}) => {

    return (
        <div className="Card">
            <div className="cardImage">
                <img src={crypto.image} alt="" />
            </div>

            <div className="cardInfo">
                <h1>{crypto.name}</h1>
                <p>Current Price: {crypto.current_price}</p>
                <p>Price Change: {crypto.price_change_24h}</p>
                <p>
                    Price Change Percentage:{" "}
                    {crypto.price_change_percentage_24h}
                </p>
                <p>Total Volume: {crypto.total_volume}</p>
            </div>

            <div className="cardButton">
                <p>BUY</p>
            </div>
        </div>
    );
};
