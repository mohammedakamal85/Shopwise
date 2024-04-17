import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Component/main-pages/Home";
import Products from "./Component/main-pages/Products";
import Carts from "./Component/main-pages/Carts";
import Login from "./Component/main-pages/Login";
import Profile from "./Component/main-pages/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Carts" element={<Carts />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
