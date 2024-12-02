import React from "react";
import { Route, Routes } from 'react-router-dom';
import Auth from "../pages/Auth";
import Home from "../pages/Home";

function RouterConfig() {
        return (
            <div>
                <Routes>
                    <Route exact path='/home' element={<Home/>}/>
                    <Route exact path='/' element={<Auth/>}/>
                </Routes>
            </div>
        )
    }

export default RouterConfig;
