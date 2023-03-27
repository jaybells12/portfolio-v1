import "./About.css";
import photo from "../assets/self-portrait.jpg";
import logo from "../assets/jb-dev-logo.png";
import { useEffect, useState, useRef } from "react";

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const portraitRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: "-50% 0% -50% 0%",
      }
    );
    const { current: currentRef } = containerRef;
    io.observe(currentRef);

    return () => {
      io.disconnect();
    };
  }, []);

  return (
    <section ref={containerRef} className="page" id="aboutPage">
      <div className="images-container">
        <img
          ref={logoRef}
          src={logo}
          alt="JB"
          id="about--logo"
          className={`logo${isVisible ? " hide" : ""}`}
        />
        <img
          ref={portraitRef}
          src={photo}
          alt="self-portrait"
          id="about--portrait"
          className={`portrait${isVisible ? " show" : ""}`}
        />
      </div>
      <div className="text-container">
        <h2>Hello and Welcome!</h2>
        <p ref={textRef} className="text-block">
          I am a{" "}
          <span className="text-highlight">
            <strong>self-taught developer</strong>
          </span>
          ,
          <br />
          based in El Segundo, California.
          <br />
          My area of expertise is
          <br />
          <span className="text-highlight">
            <strong>web application development</strong>
          </span>
          ,<br />
          utilizing the{" "}
          <span className="text-highlight">
            <strong>MERN</strong>
          </span>{" "}
          stack
          <br />(
          <span className="text-lighten">
            <span className="text-highlight">
              <strong>M</strong>
            </span>
            ongoDB,{" "}
            <span className="text-highlight">
              <strong>E</strong>
            </span>
            xpress,{" "}
            <span className="text-highlight">
              <strong>R</strong>
            </span>
            eactJS,{" "}
            <span className="text-highlight">
              <strong>N</strong>
            </span>
            odeJS).
          </span>
          <br />I love refining my craft,
          <br />
          finding{" "}
          <span className="text-highlight">
            <strong>creative solutions</strong>
          </span>
          <br />
          to interesting problems,
          <br />
          and bringing{" "}
          <span className="text-highlight">
            <strong>new ideas</strong>
          </span>{" "}
          to life.
          <br />
          <br />
          Let’s build something together!
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
