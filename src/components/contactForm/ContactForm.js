import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>Name: <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} value={name}/></label>
      <label>Phone: <input type="text" id="phone" name="phone" onChange={(e) => setPhone(e.target.value)} value={phone}/></label>
      <label>Email: <input type="text" id="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} /></label>
      <button>Submit</button>

    </form>
  );
};
