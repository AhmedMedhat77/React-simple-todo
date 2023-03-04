import React from "react";

function Input(props) {
  return (
    <input
      ref={props?.refrence}
      type={props.type}
      placeholder={props?.placeHolder}
      required={props?.required}
      onChange={props.handleInput}
    />
  );
}

export default Input;
