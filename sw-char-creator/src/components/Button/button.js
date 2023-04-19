import React from "react";

const Button = (props) => {
  return (
    <div className="btn-container">
      <button onClick={props.function} className="scroll-btn">
        {props.name}
      </button>
    </div>
  );
};

export default Button;
