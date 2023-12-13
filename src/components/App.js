
import {BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css'
import Navbar from './navbar/Navbar';
import LoginForm from './loginForm/LoginForm';
import UserProfile from './userProfile/UserProfile';
import RegisterForm from './registerForm/RegisterForm';
import Home from "./pages/home/Home";
import Footer from "./footer/Footer";
import Error404 from "./pages/error404/Error404";
import React from "react";

function App(){    
    return (
    <BrowserRouter>
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path='/'element={<Home/>}/>
                
                <Route path='/register'element={<RegisterForm/>}/>
                <Route path='/login'element={<LoginForm/>}/>
                <Route path='/user'element={<UserProfile/>}/>           
                
                <Route path='*' element={<Error404/>}/>

            </Routes>
            <Footer/>
        </div>
    </BrowserRouter>
    )
}

export default App;