import React from "react";
import Button from "../button/Button";

function ListItem(props) {
  return (
    <li id={props.id} className="list-item">
      <p>{props.text}</p>
      <div className="list-actions">
        <Button
          text="edit"
          background="green"
          color="#fff"
          onClick={props.edit}
        />
        <Button
          onClick={props.actions}
          text="delete"
          background="red"
          color="#fff"
        />
      </div>
    </li>
  );
}

export default ListItem;
