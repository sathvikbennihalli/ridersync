import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body-container">
        <div className="text-container">
          <div className="left-section">
            <h1>Find jobs.</h1>
            <h2>Earn more.</h2>
            <h3>
              Connecting delivery partners with easy earning opportunities
            </h3>
          </div>
        </div>
        <div className="text-container">
          <div className="right-section">
            <div className="card">
              <h2>Enter Your Phone Number</h2>
              <input type="text" placeholder="Phone Number" />
              <button className="submit-button">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
