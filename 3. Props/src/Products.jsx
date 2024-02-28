import React from "react";

function Products(props) {
    console.log(props);
    return (
        <div>
            <div>
                <div>İsim : {props.productName}</div>
                <div>Fiyat : {props.price} TL</div>
            </div>
        </div>
    )   
}

export default Products;
