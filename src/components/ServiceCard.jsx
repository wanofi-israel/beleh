import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function ServiceCard({ text, brief,bgImage }) {
  const navigate = useNavigate();
  const clickRef = useRef(null);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // relative X
    const y = e.clientY - rect.top;  // relative Y
    clickRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };

  return (
    <div
      className="servicecard"
      ref={cardRef}
      onClick={() => navigate("/services")}
      onMouseEnter={() => {
        clickRef.current.style.display = "flex";
      }}
      onMouseLeave={() => {
        clickRef.current.style.display = "none";
      }}
      onMouseMove={handleMouseMove}
    >
      <div className="servicecard-bg">
        <img src={bgImage} alt={text}/>
      </div>
      <div className="click-div" ref={clickRef}></div>
      <div className="servicecard-content">
        <h3>{text}</h3>
        <p>{brief}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
