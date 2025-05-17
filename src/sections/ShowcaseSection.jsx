import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const handleCardClick = (ref, url) => {
      gsap.to(ref.current, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
        onComplete: () => {
          window.open(url, "_blank");
        },
      });
    };

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div>
      <div
        ref={(el) => {
          if (el) {
            gsap.to(el, {
              opacity: 1,
              y: 0,
              duration: 1,
              scrollTrigger: {
                trigger: el,
                start: "top bottom-=100",
              },
            });
          }
        }}
        style={{
          opacity: 0,
          transform: "translateY(50px)",
        }}
        className="mt-20 mb-5"
      >
        <TitleHeader
          sub="My Projects💡"
          title="Real-World Applications"
        />
      </div>

      <div id="work" ref={sectionRef} className="app-showcase">
        <div className="showcaselayout flex flex-col md:flex-row gap-8 md:gap-6">
          
          <div
            ref={libraryRef}
            className="project relative cursor-pointer"
            onClick={() =>
              handleCardClick(
                libraryRef,
                "https://github.com/library-management"
              )
            }
          >
            <div
              className="image-wrapper project transition-transform duration-300 transform-gpu hover:scale-105 hover:z-10"
              style={{
                position: "relative",
                zIndex: 1,
              }}
            >
              <img
                src="/images/HandsignBanner.png"
                alt="Library Management Platform"
                className="transition-transform duration-300 ease-in-out"
                style={{ borderRadius: "8px" }}
              />
            </div>
            <h2 className="mt-6">SignSpeak: Hand Gestures to Real-Time Speech</h2>
          </div>
          <div
            ref={rydeRef}
            className="project relative cursor-pointer"
            onClick={() =>
              handleCardClick(rydeRef, "https://github.com/ryde-app")
            }
          >
            <div
              className="image-wrapper project transition-transform duration-300 transform-gpu hover:scale-105 hover:z-10"
              style={{
                position: "relative",
                zIndex: 1,
              }}
            >
              <img
                src="/images/CrimBanner.png"
                alt="Suspecto: A Crime Detection System"
                style={{ objectFit: "fill", borderRadius: "8px" }}
              />
            </div>
            <div className="text-content mt-6">
              <h2>Suspecto: A Crime Detection System </h2>
            </div>
          </div>


          <div
            ref={ycDirectoryRef}
            className="project relative cursor-pointer"
            onClick={() =>
              handleCardClick(ycDirectoryRef, "https://github.com/yc-directory")
            }
          >
            <div
              className="image-wrapper project transition-transform duration-300 transform-gpu hover:scale-105 hover:z-10"
              style={{
                position: "relative",
                zIndex: 1,
              }}
            >
              <img
                src="/images/CarBanner.png"
                alt="YC Directory App"
                className="transition-transform duration-300 ease-in-out"
                style={{ borderRadius: "20px" }}
              />
            </div>
            <h2 className="mt-6">Autonomix VisionCraft- AI-Powered Object Detection & Navigation</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
