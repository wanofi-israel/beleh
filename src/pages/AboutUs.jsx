import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { HashLink as Link } from "react-router-hash-link";
import More from "../components/More";
function AboutUs() {
  useGSAP(() => {
    const splitSlogan = new SplitText(".slogan h1", { type: "lines,words" });
    const splitBrief = new SplitText(".brief p", { type: "lines" });
    const tl = gsap.timeline({ repeat: -1 });
    gsap.from(splitSlogan.lines, {
      opacity: 0,
      yPercent: 100,
      ease: "power1.inOut",
      stagger: 0.06,
      duration: 1,
    });
    gsap.from(splitSlogan.words, {
      opacity: 0,
      yPercent: 100,
      ease: "power1.inOut",
      stagger: 0.08,
      duration: 1,
    });
    gsap.from(".slider", {
      opacity: 0,
      yPercent: 100,
      ease: "power1.inOut",
      stagger: 0.08,
      duration: 1,
    });
    gsap.from(splitBrief.lines, {
      opacity: 0,
      yPercent: 100,
      ease: "power1.inOut",
      stagger: 0.06,
      duration: 1,
      delay: 1,
    });
    gsap.from(".cta-discover", {
      opacity: 0,
      yPercent: 100,
      ease: "power1.inOut",
      delay: 1.5,
    });

    tl.to(
      ".slider",
      {
        yPercent: 0,
      },
      "+=2"
    )
      .to(
        ".slider",
        {
          yPercent: -25,
        },
        "+=2"
      )
      .to(
        ".slider",
        {
          yPercent: -50,
        },
        "+=4"
      );

      gsap.to('.logoWhite',{
                display:'none'
            },0)
            gsap.to('.logoDark',{
                display:'flex'
            },0)
  }, []);


  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <div className="about-us_page hero">
        <div className="content">
          <div className="fade-in slogan">
            <h1>
              Founded on
              <br /> a Passion for <br />
            </h1>
            <div className="sliding-word">
              <div className="slider">
                <div className="first gradient-text">Music</div>{" "}
                <div className="second gradient-text">Brand Distinction.</div>{" "}
                <div className="first gradient-text">Music</div>{" "}
                <div className="second gradient-text">Brand Distinction.</div>
              </div>
            </div>
          </div>
          <div className="fade-in brief">
            <p>
              Bleh Jingles is a premier jingle and promotional sound production
              company with over a decade of experience in crafting memorable
              audio content.
            </p>
            <Link to="/about/#more" className="cta-discover">
                Discover more <ArrowDownwardIcon/>
            </Link>
          </div>
        </div>
      </div>
      <More />
    </>
  );
}

export default AboutUs;
