import React, {useState} from "react";
import {AppointmentForm} from '../../components/appointmentForm/AppointmentForm'
import {TileList} from '../../components/tileList/TileList'

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */

  const [title, setTitle] = useState("")

  const handleTitleChange = (newTitle) => {
    setTitle(newTitle)
  }

  const [contact, setContact] = useState("")

  const handleContactChange = (newContact) => {
    setContact(newContact)
  }

  const [date, setDate] = useState("")

  const handleDateChange = (newDate) => {
    setDate(newDate)
  }

  const [time, setTime] = useState("")

  const handleTimeChange = (newTime) => {
    setTime(newTime)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */

    const newAppointment = {title: title, contact: contact, date: date, time: time}

    props.addAppointment(newAppointment)
    setTitle("")
    setContact("")
    setDate("")
    setTime("")
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm title={title} contact={contact} date={date} time={time} setTitle={handleTitleChange} setContact={handleContactChange} setDate={handleDateChange} setTime={handleTimeChange} handleSubmit={handleSubmit} contacts={props.contacts}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList dataType="appointments" data={props.appointments}/>
      </section>
    </div>
  );
};
