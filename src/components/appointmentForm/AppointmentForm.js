import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker'

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
    <label>Title: <input type="text" id="title" name="title" onChange={(e) => setTitle(e.target.value)} value={title}/></label>
    <label>Contact:<ContactPicker contacts={contacts} contact={contact} setContact={setContact}/></label>
    <label>Date: <input type="date" min={getTodayString()} id="date" name="date" onChange={(e) => setDate(e.target.value)} value={date}/></label>
    <label>Time: <input type="time" id="time" name="time" onChange={(e) => setTime(e.target.value)} value={time} /></label>
    <button>Submit</button>

  </form>
  );
};
