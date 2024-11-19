import React from "react";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const { id, name, price } = product

  const navigate = useNavigate(); // useNavigate

  return <div style={{margin:"40px"}}>
    <div>Ürün Detayı</div>
    <h3>İsim : {name}</h3>
    <h3>Fiyat : {price}</h3>
    <button onClick={() => navigate("/product-details/" + id)}>Detayına Git</button>
  </div>;
}

export default Product;
