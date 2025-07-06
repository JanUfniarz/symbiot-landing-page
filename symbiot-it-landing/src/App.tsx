import React from 'react';
import {Theme} from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

import './radix-custom-palette/accent.css'
import './radix-custom-palette/gray.css'
import './radix-custom-palette/background.css'

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import {heroContent1} from "./content/contents";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuditForm from "./components/audit_form";


const App = () => <BrowserRouter><Theme
    accentColor='green'
    appearance='dark'
    panelBackground='translucent'
    hasBackground={true}
>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Hero content={ heroContent1 }/>} />
        <Route path="/wycena" element={<AuditForm/>} />
    </Routes>


</Theme></BrowserRouter>

export default App;
