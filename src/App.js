import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import './App.css'

function App(){
  return(
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  )
}

export default App