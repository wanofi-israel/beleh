import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { useMediaQuery } from "react-responsive";
import Logo from "../assets/images/blehLogo.png";

function ValuesDetail() {
  const box = useRef();
  const isMobile = useMediaQuery({ maxWidth: 666 });
  useGSAP(() => {
    if (!isMobile) {
      const contentTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".container",
          start: "top top",
          end: "bottom -100%",
          pin: true,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      contentTl
        .to(
          ".content",
          {
            yPercent: -80,
          },
          0
        )
        .fromTo(
          ".back-shadow",
          {
            background:
              "radial-gradient(circle, rgba(51,112,255,1) 0%, rgba(51,112,255,0) 80%)",
          },
          {
            background:
              "radial-gradient(circle, #fd982a 0%, rgba(255,0,0,0) 80%)",
          },
          0
        )
        .fromTo(
          ".sticky-image",
          {
            border: "1px solid rgba(51,112,255,1)",
          },
          {
            border: "1px solid #fd982a",
            ease: "none",
          },
          0
        )
        .fromTo(
          ".sticky-image img",
          {
            filter: "drop-shadow(15px 5px 30px rgba(51,112,255,1))",
          },
          {
            filter: "drop-shadow(-15px -5px 30px #fd982a)",
            ease: "none",
          },
          0
        );

         gsap.to('.container',{
          scrollTrigger:{
            trigger:'.container',
            start:"top top",
            end:"bottom top",
            onEnterBack:()=>{
              gsap.to('.navbar',{
              color:'var(--color-text)'
    })
            }
          }
        })
    }
  }, []);
  return (
    <div className="container" id="container">
      <div ref={box} className="values-left">
        <div className="back-shadow">b</div>
        <div
          className="sticky-image"
          onMouseMove={(e) => {
            e.preventDefault;
            let prop = box.current.getBoundingClientRect();
            gsap.to(".back-shadow", {
              top: e.clientY - prop.top,
              left: e.clientX - prop.left,
              delay: 0.3,
            });
          }}
          onMouseLeave={() => {
            gsap.to(".back-shadow", {
              top: "80%",
              left: "50%",
              delay: 0.5,
            });
          }}
        >
          <img src={Logo} alt="bleh-logo" />
        </div>
      </div>
      <div className="values-right">
        <div className="content" id="content">

          <div className="value-top">
            <h3>Creativity that Connects</h3>
            <p>
              At Bleh Jingles, we don't just create sounds; we craft emotions. Every lyric, melody, and tune 
              is designed to connect with your audience on depper level, leaving them with a catchy and memorable impression of brand.
            </p>
            <div className="cta-container">
              <button
                className="cta-learn-more"
                style={{
                  color: "var(--color-accent-blue)",
                  backgroundColor: "rgba(51,112,255,.2)",
                }}
              >
                Learn more{" "}
                <div className="icon">
                  <ArrowForwardRoundedIcon
                    sx={{ fill: "var(--color-accent-blue)" }}
                  />
                </div>
              </button>
            </div>
          </div>

          <div className="value-bottom">
            <h3>Professional Quality</h3>
            <p>
              Our team ensures every projet meets the highest industry standards. With expert mixinig, mastering, and studio-grade recording, your jingle is
              delivered with clarity, balance, and polished finish needed to stand out across all media platforms.
            </p>
            <div className="cta-container">
              <button
                className="cta-learn-more"
                style={{ color: "#fd982a", backgroundColor: "#fd972a7c" }}
              >
                Learn more{" "}
                <div className="icon">
                  <ArrowForwardRoundedIcon sx={{ fill: "#fd982a" }} />
                </div>
              </button>
            </div>
          </div>

          <div className="value-bottom">
            <h3>End-to-End Service</h3>
            <p>
              From the very first idea to the final track, we take care of everything. Whether it's brainstorming concepts, composing melodies, recording vocals,
               or final mastering, we provide a seamless, one-stop solution for all your jingle needs.
            </p>
            <div className="cta-container">
              <button
                className="cta-learn-more"
                style={{ color: "#fd982a", backgroundColor: "#fd972a7c" }}
              >
                Learn more{" "}
                <div className="icon">
                  <ArrowForwardRoundedIcon sx={{ fill: "#fd982a" }} />
                </div>
              </button>
            </div>
          </div>
          
          <div className="value-bottom">
            <h3>Brand Impact</h3>
            <p>
             We believe every sound should serve a purpose. Our Jingles are more than music; they're tools that amplify your brand's identity, strengthen recognition, and drive lasting promotional impact.
            </p>
            <div className="cta-container">
              <button
                className="cta-learn-more"
                style={{ color: "#fd982a", backgroundColor: "#fd972a7c" }}
              >
                Learn more{" "}
                <div className="icon">
                  <ArrowForwardRoundedIcon sx={{ fill: "#fd982a" }} />
                </div>
              </button>
            </div>
          </div>

          <div className="value-bottom">
            <h3>On-Time Delivery</h3>
            <p>
             We value your time as much as your brand. Every project is completed on schedule, ensuring you get high-quality jingles exactly when you need them, without delays.
            </p>
            <div className="cta-container">
              <button
                className="cta-learn-more"
                style={{ color: "#fd982a", backgroundColor: "#fd972a7c" }}
              >
                Learn more{" "}
                <div className="icon">
                  <ArrowForwardRoundedIcon sx={{ fill: "#fd982a" }} />
                </div>
              </button>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default ValuesDetail;
