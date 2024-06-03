import React from "react";
import "./Empty.css";

const Empty = ({ text }) => {
  return (
    <div className="empty">
      <h2>{text}</h2>
      <p>There are no favorite products yet</p>
    </div>
  );
};

export default Empty;
