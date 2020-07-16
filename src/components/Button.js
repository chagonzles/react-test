import React from "react";

const Button = props => {
  return (
    <button className={`btn btn-${props.type}`} disabled={props.disabled}>
      {props.name}
    </button>
  );
};

export default Button;
