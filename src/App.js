import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import "./bautexhtml/style.css"
import SecondPage from "./pages/SecondPage";
import "./bautexhtml2/style2.css"

export class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/second' element={<SecondPage />} />
        </Routes>
      </BrowserRouter>
      
    );
  }
}

export default App;
