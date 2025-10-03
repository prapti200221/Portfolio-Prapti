import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PowerBIDashboard from "./components/PowerBIDashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PowerBIDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
