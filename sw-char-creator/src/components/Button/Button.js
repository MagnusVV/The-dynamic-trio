import React from "react";

const Button = (props) => {
  return (
    <button type={props.type} onClick={props.onClick} className="custom-btn">
      {props.name}
    </button>
  );
};

export default Button;
