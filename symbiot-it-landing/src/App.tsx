import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Theme} from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import './radix-custom-palette/accent.css'
import './radix-custom-palette/gray.css'
import './radix-custom-palette/background.css'

import Navbar from "./App/Navbar/Navbar";
import Home from "./App/views/Home/Home";
import Pricing from "./App/views/Pricing/Pricing";


const App = () => <BrowserRouter><Theme
    accentColor='green'
    appearance='dark'
    panelBackground='translucent'
    hasBackground={true}
>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/wycena" element={<Pricing/>} />
    </Routes>


</Theme></BrowserRouter>

export default App;
