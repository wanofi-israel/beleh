import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SplitText, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Portfolio from "./pages/Portfolio";
import { useGSAP } from "@gsap/react";
import Landing from "./pages/Landing";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import ContactForm from "./components/ContactForm";
import AboutUs from "./pages/AboutUs";
function App() {
  gsap.registerPlugin(SplitText, ScrollTrigger);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      onUpdate: (self) => {
        if (self.direction === 1) {
          gsap.to(".navbar", { top: -100, opacity: 0, ease: "power1.inOut" });
        } else {
          gsap.to(".navbar", { top: 0, opacity: 1, ease: "power1.inOut" });
        }
      },
    });
  }, []);

  return (
    <>
      {/* Persistent Video */}
      <video 
        autoPlay 
        playsInline 
        loop 
        muted  
        preload="auto" 
        className="bg-video"
      >
        <source src="/videos/bgWave.mp4" type="video/mp4"/>
      </video>

      {/* Router handles only content */}
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route index element={<Landing/>}/>
            <Route path="/portfolio/:project" element={<Portfolio/>}/>
            <Route path="/about" element={<AboutUs/>}/>
          </Routes>
          <ContactUs />
          <ContactForm/>
          <Footer/>
        </div>
      </Router>
    </>
  );
}


export default App;
