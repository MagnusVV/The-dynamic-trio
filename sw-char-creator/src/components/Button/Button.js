import React from "react";

const Button = (props) => {
  return (
    <button type="submit" onClick={props.onClick} className="scroll-btn">
      {props.name}
    </button>
  );
};

export default Button;
