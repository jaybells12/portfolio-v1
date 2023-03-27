import "./Certificate.css";
import { useState, useEffect, useRef } from "react";

const Certificate = ({ logo, link, index, title }) => {
  const [slide, setSlide] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          console.log(`${entry} is intersecting`);
          setSlide(true);
        } else {
          setSlide(false);
        }
      },
      { root: null, rootMargin: "-20% 0% -15% 0%" }
    );

    const { current: certRef } = ref;
    io.observe(certRef);

    return () => io.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={`cert ${index % 2 ? "" : "even"} ${slide ? "slide" : ""}`}
    >
      <a href={link} rel="noopener noreferrer" target="_blank">
        <img src={logo} alt="cert logo" />
        <span>{title}</span>
      </a>
    </article>
  );
};

export default Certificate;
