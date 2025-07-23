import React from "react";
import "./MainNews.css";

export default function MainNews({ story }) {
  return (
    <div className="main-news">
      <h2>{story.title}</h2>
      <p>{story.description}</p>
      <div className="meta">
        <span className="category">{story.category}</span>
        <span className="time">{story.time}</span>
      </div>
    </div>
  );
}
