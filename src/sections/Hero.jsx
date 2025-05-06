import React from "react";
import { words } from "../constants/index.js";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";
import { useGSAP } from "@gsap/react";  
import { gsap } from "gsap";
import Button from "../components/Button.jsx";
import Button2 from "../components/Button2.jsx";
import AnimatedCounter from "../components/AnimatedCounter.jsx";

const Hero = () => {
  useGSAP(() => {
gsap.fromTo(
    ".hero-text h1",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 1,
      ease: "power2.inOut",
    }
  );

  })
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((words) => (
                      <span
                        key={words.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={words.imgPath}
                          alt={words.alt}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{words.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>

              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I'm Vinay Naik, a developer based in India with a passion for
              creating innovative solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/files/resume.pdf" // Path to your resume file
                download="Vinay_Naik_Resume.pdf" // Suggested file name for download
                className="md:w-80 md:h-16 w-80 h-12"
              >
                <Button2 text="Download Resume" id="button2" />
              </a>
              <a
                href="/files/failure_cv.pdf" // Path to your failure CV file
                download="Vinay_Naik_Failure_CV.pdf" // Suggested file name for download
                className="md:w-80 md:h-16 w-80 h-12"
              >
                <Button2 text="Failure CV" id="button3" />
              </a>
            </div>
            <Button 
                className="md:w-80 md:h-16 w-80 h-12"
                text="See My Work"
                id="button"
              />
          </div>
        </header>

        <figure>
            <div className="hero-3d-layout">
                <HeroExperience />

            </div>
        </figure>
      </div>
      <AnimatedCounter/>
    </section>
  );
};

export default Hero;
