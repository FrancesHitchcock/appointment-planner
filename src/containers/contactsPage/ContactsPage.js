import React, {useState, useEffect} from "react";
import {ContactForm} from '../../components/contactForm/ContactForm'
import {TileList} from '../../components/tileList/TileList'

const validPhone = /^\d{1,11}$/;

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState ("")
  
  const handleNameChange = (newName) => {
    setName(newName)
  }

  const [phone, setPhone] = useState ("")

  const handlePhoneChange = (newPhone) => {
    const isValid = validPhone.test(newPhone)
    if(isValid) {
      setPhone(newPhone)
    }
    else {
      alert("Invalid phone number.")
      setPhone("")
    }
  }

  const [email, setEmail] = useState ("")

  const handleEmailChange = (newEmail) => {
      setEmail(newEmail)
  }

  const [duplicateName, setDuplicateName] = useState (false)

  const handleSubmit = (e) => {
   e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    const newContact = {name: name, phone: phone, email: email}

    if (!duplicateName) {
      props.addContact(newContact)
      setName("")
      setPhone("")
      setEmail("")
    }
    else {
      alert("Warning: You already have this name in your contacts list.")
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    const contactNames = props.contacts.map(item => item.name)
    contactNames.includes(name) ? setDuplicateName(true) :setDuplicateName(false)
  }, [props.contacts, name])

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm name={name} phone={phone} email={email} setName={handleNameChange} setPhone={handlePhoneChange} setEmail={handleEmailChange} handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList dataType="contacts" data={props.contacts}/>
      </section>
    </div>
  );
};
