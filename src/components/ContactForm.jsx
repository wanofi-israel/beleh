import axios from "axios";
import React, { useState } from "react";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
     const respnse=await axios.post('http://localhost:8000/api/contact/',formData)

     if(respnse){
      console.log(respnse); 
     }
    } catch (error) {
      console.log(error);
    }
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="contactus-form-section" id='contact_us'>
    <div className="contact-form-container">
      <h2>Let's get in touch!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name *
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Abebe Kebede"
          />
        </label>

        <label>
          Email *
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="abebe@example.com"
          />
        </label>

        <label>
          Phone Number *
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="+251 9XXXXXXXX"
          />
        </label>

        <label>
          Message *
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your message..."
          />
        </label>

        <button type="submit">OK</button>
      </form>
    </div>
    </div>
  );
};

export default ContactForm;
