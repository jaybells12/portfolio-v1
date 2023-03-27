import "./Contact.css";
import { useState, useEffect, useRef } from "react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pageRef = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { root: null, rootMargin: "-50% 0% -50% 0%" }
    );

    const { current: currentRef } = pageRef;
    io.observe(currentRef);

    return () => io.disconnect();
  }, []);

  function mailto(event) {
    event.preventDefault();
    window.open("mailto:jay.bells12@gmail.com", "Mail");
  }

  return (
    <section ref={pageRef} className="page" id="contactPage">
      <div className="contact--container">
        <p>
          T<span className="small">HANKS</span>
        </p>
        <p className={`sideways ${isVisible ? "play" : ""}`}>
          for stopping by!
        </p>
        <p className={`letterdrop ${isVisible ? "play" : ""}`}>
          <span className="letter g1 c1">L</span>
          <span className="letter g1 c2">e</span>
          <span className="letter g1 c3">t</span>
          <span className="letter g1 c4">'</span>
          <span className="letter g1 c5">s</span>{" "}
          <span className="letter g1 c6">b</span>
          <span className="letter g1 c7">u</span>
          <span className="letter g2 c1">i</span>
          <span className="letter g2 c2">l</span>
          <span className="letter g2 c3">d</span>
          <br />
          <span className="letter g2 c4">s</span>
          <span className="letter g2 c5">o</span>
          <span className="letter g2 c6">m</span>
          <span className="letter g2 c7">e</span>
          <span className="letter g3 c1">t</span>
          <span className="letter g3 c2">h</span>
          <span className="letter g3 c3">i</span>
          <span className="letter g3 c4">n</span>
          <span className="letter g3 c5">g</span>{" "}
          <span className="letter g3 c6">t</span>
          <span className="letter g3 c7">o</span>
          <span className="letter g4 c1">g</span>
          <span className="letter g4 c2">e</span>
          <span className="letter g4 c3">t</span>
          <span className="letter g4 c4">h</span>
          <span className="letter g4 c5">e</span>
          <span className="letter g4 c6">r</span>
          <span className="letter g4 c7">!</span>
        </p>
        <a onClick={mailto} href="mailto:jay.bells12@gmail.com">
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Contact;
