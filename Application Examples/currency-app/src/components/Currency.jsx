import axios from "axios";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import "../css/currency.css";


function Currency() {
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("TRY");
    const [result, setResult] = useState("");

    let token = "fca_live_xCdRFWK0o5ccLqtecVTdKCTmEq0ghkbWYcCldcb4"
    let baseUrl = "https://api.freecurrencyapi.com/v1/latest"

    const exchange = async () => {
        try {
          const response = await axios.get(
            `${baseUrl}?apikey=${token}&base_currency=${fromCurrency}`
          );
          const result = (response.data.data[toCurrency] * amount).toFixed(2);
          setResult(result);
        } catch (error) {
          console.log("hata olustu ", error);
        }
      };
    

    return <div className="currency-div">
        <div className="title">
            <h3>Döviz Kuru Uygulaması</h3>
        </div>

        <div className="transaction-container">
            <input type="number" className="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <select className="currency-option"
                onChange={(e) => setFromCurrency(e.target.value)}
            >
                <option>USD</option>
                <option>EUR</option>
                <option>TRY</option>
            </select>

            <FaArrowRight style={{ fontSize: "25px", marginRight: "10px" }} />

            <select className="currency-option"
                onChange={(e) => setToCurrency(e.target.value)}
            >
                <option>TRY</option>
                <option>EUR</option>
                <option>USD</option>
            </select>

            <input type="number" className="result"
                value={result}
                readOnly
            />

        </div>
        <div>
            <button className="exchange-button"
                onClick={exchange}>Çevir</button>
        </div>
    </div>

}

export default Currency;
