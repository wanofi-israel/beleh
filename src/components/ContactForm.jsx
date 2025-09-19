import { useGSAP } from "@gsap/react";
import axios from "axios";
import gsap from "gsap";
import React, { useState } from "react";


const ContactForm = () => {
  const [loading,setLoading]=useState(false)
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
    setLoading(true)
    e.preventDefault();
    try {
     const respnse=await axios.post(`${import.meta.env.VITE__URL}`,formData, {
  headers: {
    Authorization: `${import.meta.env.VITE__API_KEY}`
  },
  withCredentials: true 
})

     if(respnse){
      setFormData({ name: "", email: "", phone: "", message: "" });
     }
    } catch (error) {
      console.log(error);
    } finally{
      setLoading(false)
    }
  };

  useGSAP(()=>{
    gsap.to('.contactus-form-section',{
                scrollTrigger:{
                  trigger:'.contactus-form-section',
                  start:"top top",
                  end:'bottom top',
                  onEnter:()=>{
                    gsap.to('.navbar',{
      color:'var(--color-text)'
    })
    gsap.to('.logoWhite',{
      display:"flex",
    },0)
    gsap.to('.logoDark',{
      display:"none",
    },0)
                  },
                  onLeaveBack:()=>{
                    gsap.to('.navbar',{
      color:'var(--color-text-blue)'
    })
    gsap.to('.logoWhite',{
      display:"none",
    },0)
    gsap.to('.logoDark',{
      display:"flex",
    },0)
                  }
                }
              })
  },[])
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

        <button type="submit">{loading?"...":"Send"}</button>
      </form>
    </div>
    </div>
  );
};

export default ContactForm;
