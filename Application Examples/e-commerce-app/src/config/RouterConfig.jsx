import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home'
import ProductDetail from "../components/ProductDetail";

function RouterConfig() {
  return (
    <div>
        <Routes>
            <Route path="/" element= {<Home/>} />
            <Route path="/product-details/:id" element= {<ProductDetail/>} />
        </Routes>
    </div>
  )
}

export default RouterConfig;