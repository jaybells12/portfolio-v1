import "./Footer.css";
import { useId } from "react";

export default function Footer({ socialMediaData }) {
  const id = useId();

  function mailto(event) {
    event.preventDefault();
    window.open("mailto:jay.bells12@gmail.com", "Mail");
  }
  return (
    <footer>
      <div className="sm-links--container">
        {socialMediaData.map((item, index) => {
          return (
            <a
              className="sm-link"
              href={item.link}
              target="_blank"
              rel="noreferrer noopener"
              key={`${id}FL-${index}`}
            >
              <img className="sm-icon" src={item.logo} />
            </a>
          );
        })}
      </div>
      <p className="name text">James Bellomy</p>
      <a
        className="email text"
        onClick={mailto}
        href="mailto:jay.bells12@gmail.com"
      >
        Jay.Bells12@gmail.com
      </a>
    </footer>
  );
}
