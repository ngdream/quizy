import ReactDOM from "react-dom/client";
import { HashRouter, BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import React from 'react';
import './index.css';
import './App.css';
import Qcm from './composants/Qcm';
import Create from "./composants/Create";
import Header from "./composants/Header";
import ChoixQcm from "./composants/ChoixQcm";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/Qcm/:id" element={<Qcm />} />
      <Route path="/Create" element={<Create />} />
      <Route path="/ChoixQcm" element={<ChoixQcm />} />

    </Routes>
  </HashRouter>

);


