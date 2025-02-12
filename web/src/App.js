import "./styles/App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroesList from "./pages/HeroesList";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HeroesList />} />
            </Routes>
        </Router>
    );
}

export default App;
