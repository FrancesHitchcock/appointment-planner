import React from "react";

export const Tile = (props) => {
 
  let filledTile

  if (props.dataType === "contacts") {
    filledTile = <div>
      <p className="tile-title">Name: {props.data.name}</p>
      <p className="tile">Phone: {props.data.phone}</p>
      <p className="tile">Email: {props.data.email}</p>
      <hr /></div>
  }

  else if (props.dataType === "appointments") {
    filledTile = <div>
      <p className="tile-title">Title: {props.data.title}</p>
      <p className="tile">Contact: {props.data.contact}</p>
      <p className="tile">Date: {props.data.date}</p>
      <p className="tile">Time: {props.data.time}</p>
      <hr /></div>
  }

  return (
    <div className="tile-container">
      {filledTile}
    </div>
  );
};
