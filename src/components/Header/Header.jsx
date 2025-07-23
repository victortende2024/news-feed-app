import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header container">
      <div className="logo">NEWS TODAY</div>
      <nav className="nav-links">
        {["U.S.", "Politics", "Sports", "Entertainment", "Life", "Money", "Travel", "Opinion"].map(link => (
          <a key={link} href="#">{link}</a>
        ))}
      </nav>
      <div className="extras">
        <span>65°F</span>
        <a href="#">Subscribe</a>
        <a href="#">Sign In</a>
      </div>
    </header>
  );
}
