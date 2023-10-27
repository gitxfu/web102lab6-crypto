import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinChart from "./CoinChart";
const API_KEY = import.meta.env.VITE_APP_API_KEY;


const coinDetail = () => {

    let params = useParams();
    const [fullDetails, setFullDetails] = useState(null);

    console.log("DetailView")

    useEffect(() => {
        const getCoinDetail = async () => {
            const details = await fetch(
                `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${params.symbol}&tsyms=USD&api_key=` +
                API_KEY
            );


            const description = await fetch(
                `https://min-api.cryptocompare.com/data/all/coinlist?fsym=${params.symbol}&api_key=` +
                API_KEY
            );

            const detailsJson = await details.json();
            const descripJson = await description.json();

            setFullDetails({ "numbers": detailsJson.DISPLAY, "textData": descripJson.Data });
        };

        getCoinDetail().catch(console.error);
    }, []);

    // const symbolUpperCase = params.symbol.toUpperCase();

    // console.log("textData:", fullDetails?.textData);
    // console.log("symbol:", params.symbol);
    // console.log("textData-uppercase-symbol:", fullDetails?.textData[symbolUpperCase]);
    // console.log("textData-symbol:", fullDetails?.textData[params.symbol]);



    return (
        <>
            {
                fullDetails != null ? (
                    <div>
                        <h1>{fullDetails.textData[params.symbol].FullName}</h1>
                        <img
                            className="images"
                            src={`https://www.cryptocompare.com${fullDetails.numbers[params.symbol].USD.IMAGEURL
                                }`}
                            alt={`Small icon for ${params.symbol} crypto coin`}
                        />
                        <div> {fullDetails.textData[params.symbol].Description}</div>
                        <br></br>
                        <div>
                            This coin was built with the algorithm{" "}
                            {fullDetails.textData[params.symbol].Algorithm}{" "}
                        </div>
                        <br></br>
                        <table>
                            <tbody>
                                <tr>
                                    <th> MARKET </th>
                                    <td> {fullDetails.numbers[params.symbol].USD.MARKET} </td>
                                </tr>
                                <tr>
                                    <th> PRICE </th>
                                    <td> {fullDetails.numbers[params.symbol].USD.PRICE} </td>
                                </tr>
                                <tr>
                                    <th> LASTVOLUME </th>
                                    <td> {fullDetails.numbers[params.symbol].USD.LASTVOLUME} </td>
                                </tr>
                                <tr>
                                    <th> OPENDAY </th>
                                    <td> {fullDetails.numbers[params.symbol].USD.OPENDAY} </td>
                                </tr>
                            </tbody>
                        </table>

                        <CoinChart symbol={params.symbol} market={fullDetails.numbers[params.symbol].USD.MARKET} />
                    </div>
                ) : <h1>No data found</h1>

            }
        </>
    );
};

export default coinDetail;