import React from "react";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import { products } from "../data/products";

function ProductDetails() {

    const {id} = useParams(); //useParams


    return <div>
        <h1>Ürün Detayları</h1>
        <hr />
        {
            products && products.map((product)=> {
                if(product.id == id)
                    return <Product product={product}/>
            })
        }
    </div>;
}

export default ProductDetails;
