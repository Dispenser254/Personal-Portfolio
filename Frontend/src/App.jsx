// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContent from "./pages/MainContent";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainContent />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App