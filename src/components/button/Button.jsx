import React from "react";

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      type={props?.type}
      style={{
        backgroundColor: `${props?.background}`,
        color: `${props?.color}`,
      }}
    >
      {props.text}
    </button>
  );
}

export default Button;
