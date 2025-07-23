import React from "react";
import "./SectionList.css";

export default function SectionList({ title, items }) {
  return (
    <div className="section-list">
      <h3>{title}</h3>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
