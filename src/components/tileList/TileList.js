import React from "react";
import { Tile }  from '../tile/Tile'

export const TileList = (props) => {
  const contactsTileArray = props.data.map(contact => <Tile dataType="contacts" key={contact.name} data={contact}/>)

  const appointmentsTileArray = props.data.map(appointment => <Tile dataType="appointments" key={appointment.title} data={appointment} />)

  let tileDiv

  if (props.dataType === "contacts") {
    tileDiv = <div>{contactsTileArray}</div>
  }
  else if (props.dataType === "appointments") {
    tileDiv = <div>{appointmentsTileArray}</div>
  }

  return (
    <div>
      {tileDiv}
    </div>
  );
};
