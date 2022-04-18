import './App.css';
import React from 'react';
import Navbar from "./Navbar";
import Home from "./components/Home";
import Albums from "./components/Albums";
import {Routes, Route} from "react-router-dom";
import Table from "./components/Table";
import CRUD from "./components/CRUD";
import Edit from "./components/Edit";

function App() {

    return (
        <div className="App">
            <div className='navbar'>
                <Navbar/></div>
            <div className='content'>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/albums" element={<Albums/>}/>
                    <Route path="/tables" element={<Table/>}/>
                    <Route path="/CRUD" element={<CRUD/>}/>
                    <Route path="/Edit" element={<Edit/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
