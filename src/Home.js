// Home.js
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <header>
        <div className="overlay">
          <div className="header-content">
            <h1>Welcome to Our Restaurant!</h1>
            <p>Explore our delicious menu below:</p>
            <Link to="/menu" className="btn">
              View Menu
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
