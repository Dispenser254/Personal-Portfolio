// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContent from "./pages/MainContent";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<MainContent />} />
      </Routes>
    </Router>
  );
}

export default App;
