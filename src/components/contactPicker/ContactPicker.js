import React from "react";

export const ContactPicker = (props) => {

  const contactNames = props.contacts.map(item => <option>{item.name}</option>)

  return (
    <div>
      <select id="contacts" name="contacts" onChange={(e) => props.setContact(e.target.value)} value={props.contact}>
        <option value="">Select contact name</option>
        {contactNames}
      </select>
      
    </div>
  );
};

