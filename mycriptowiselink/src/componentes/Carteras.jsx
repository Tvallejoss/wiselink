import React from "react";
import "../styles/./Carteras.css";

export const Carteras = () => {
    return (
       <div className="card">


            <div className="cardImage">
                <img src="https://cdn.discordapp.com/attachments/840217064978907170/1088937958125609010/58428ed0a6515b1e0ad75ab6.png" alt="" />
            </div>

                <div className = "cardInfo">
                    <h1>BITCOIN</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo modi a dolorem, recusandae inventore, error </p>
                </div>

                <div className="cardButton" >

                    <p>BUY</p>
                </div>
       </div>
    );
};
