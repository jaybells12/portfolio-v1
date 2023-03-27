import "./Navbar.css";
import logo from "../assets/jb-dev-logo.png";
import burger from "../assets/nav-burger.png";
import useVerticalScrollToggle from "../hooks/useVerticalScrollToggle";
import useObserveForId from "../hooks/useObserveForId";
import useWindowWidthToggle from "../hooks/useWindowWidthToggle";
import useDebouncedResizeToggle from "../hooks/useDebouncedResizeToggle";
import { useState, useRef, useLayoutEffect, useMemo } from "react";

export default function NavBar({ sectionsRef }) {
  // console.count("NavBar Render");
  const aboutRef = useRef(null);
  const certsRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const [showNavLinks, setShowNavLinks] = useState(false);
  const [hlPos, setHlPos] = useState({
    visibility: "hidden",
    left: "0px",
    width: "0px",
  });

  const options = useMemo(
    () => ({
      root: null,
      rootMargin: "-50% 0% -50% 0%",
    }),
    []
  );

  const mobile = useWindowWidthToggle(600);
  const scrollToggle = useVerticalScrollToggle();
  const currentSectionId = useObserveForId(sectionsRef, options, mobile);
  const resizeToggle = useDebouncedResizeToggle(250);

  const highlighterPosition = (elRef, visibility = "visible") => {
    if (!elRef.current) return;
    // console.count("HLPos Func Ran");
    const rect = elRef.current.getBoundingClientRect();
    setHlPos({
      visibility: visibility,
      left: `${rect.left - 10}px`,
      width: `${rect.width + 20}px`,
    });
  };

  useLayoutEffect(() => {
    if (mobile) return;
    // console.count(`HLPos LOE Ran`);

    switch (currentSectionId) {
      case "aboutPage":
        highlighterPosition(aboutRef);
        break;
      case "certsPage":
        highlighterPosition(certsRef);
        break;
      case "workPage":
        highlighterPosition(workRef);
        break;
      case "contactPage":
        highlighterPosition(contactRef);
        break;
      default:
        highlighterPosition(aboutRef, "hidden");
    }
  }, [currentSectionId, mobile, resizeToggle]);

  return (
    <nav id="nav-bar" className={scrollToggle ? "scrolled" : ""}>
      <div
        id="nav-highlight"
        style={mobile ? { display: "none" } : hlPos}
      ></div>
      <img src={logo} alt="JB" />
      {mobile && (
        <img
          id="burger"
          alt="nav menu"
          src={burger}
          onClick={() => setShowNavLinks((prev) => !prev)}
        />
      )}
      <div
        className={`links-container ${
          mobile ? (showNavLinks ? "show-me" : "") : ""
        }`}
      >
        <a ref={aboutRef} className="nav-link" href="#aboutPage">
          About Me
        </a>
        <a ref={certsRef} className="nav-link" href="#certsPage">
          Expertise
        </a>
        <a ref={workRef} className="nav-link" href="#workPage">
          My Work
        </a>
        <a ref={contactRef} className="nav-link" href="#contactPage">
          Contact Me
        </a>
      </div>
    </nav>
  );
}
