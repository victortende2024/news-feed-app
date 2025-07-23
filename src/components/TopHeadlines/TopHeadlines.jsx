import React from "react";
import "./TopHeadlines.css";

export default function TopHeadlines({ title, items }) {
  return (
    <div className="top-headlines">
      <h3>{title}</h3>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
