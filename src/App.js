import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        {/* Your main content goes here */}
        <p>This is the main content of the website.</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
