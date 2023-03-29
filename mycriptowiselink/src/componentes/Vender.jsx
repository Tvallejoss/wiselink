import React, { useEffect, useState } from "react";

export const Vender = () => {
    const [cryptoToDelete, setCryptoToDelete] = useState();
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const coin = JSON.parse(localStorage.getItem("cryptoToDeleteLS"))
        setCryptoToDelete(coin);
        let optionsNumbers = [];

        if ( coin && coin.quantity) {
            for (let i = 1; i <= coin.quantity-1; i++) {
                if(i === 1) optionsNumbers.push("select")
                optionsNumbers.push(i);
            }
            setOptions(optionsNumbers);
        }

    }, []);

    const selectQuantityToDelete = () => {};
    const Delete = () => {

        
    };

    console.log("OPRTIONSSS", options);

    return (
        <>
            {cryptoToDelete ? (
                <>
                    <div className="container">
                        <div className="invertirContenido">
                            <div className="seleccion" id="seleccion">
                                <div className="info">
                                    <img
                                        src={cryptoToDelete.image}
                                        alt=""
                                        id="img"
                                    />
                                    <h2 id="coin">{cryptoToDelete.name}</h2>
                                    <span className="precio" id="precio">
                                        $ {cryptoToDelete.current_price}
                                    </span>

                                    <div className="fila">
                                        <div className="cantidad">
                                            <label>Quantity to Sell</label>
                                            <select
                                                name=""
                                                id=""
                                                onChange={
                                                    selectQuantityToDelete
                                                }
                                            >
                                                {/* <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option> */}

                                                {options.map((num) => (
                                                    <option value={num}>
                                                        {num}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <button onClick={Delete}>Sell</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <></>
            )}
        </>
    );
};
