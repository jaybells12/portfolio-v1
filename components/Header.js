import "./Header.css";
import NavBar from "./Navbar";

const Welcome = ({ sectionsRef }) => {
  return (
    <header className="page" id="header">
      <h1>James Bellomy</h1>
      <h2>
        Web Developer<span> & </span>Software Engineer
      </h2>
      <NavBar sectionsRef={sectionsRef} />
    </header>
  );
};

export default Welcome;
