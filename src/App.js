import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/main_page/Footer";
import Clicks from "./components/main_page/clicks";
import Contacts from "./components/contact_page/contact";
import "./index.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Clicks />}></Route>
          <Route exact path="/contact" element={<Contacts />}></Route>
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
