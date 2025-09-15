import React from "react";

function ServiceCard({ text,brief }) {
  return (
    <div className="servicecard">
      <div className="servicecard-content">
        <h3>{text}</h3>
        <p>
          {brief}
        </p>
      </div>
    </div>
  );
}

export default ServiceCard;
