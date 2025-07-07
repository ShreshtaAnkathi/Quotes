
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import RandomQuotes from "./RandomQuotes"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random" element={<RandomQuotes />} />
      </Routes>
    </Router>
  );
}

export default App;


