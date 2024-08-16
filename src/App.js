import React from "react";
import AppLayout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />} />
      </Routes>
    </Router>
  );
}
export default App;
