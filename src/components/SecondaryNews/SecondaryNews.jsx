import React from "react";

function SecondaryNews({ story }) {
  return (
    <div className="secondary-news">
      <h2>{story.title}</h2>
    </div>
  );
}

export default SecondaryNews;
