import "./Hexagon.css";
import { useState } from "react";

function Hexagon({
  title,
  link,
  image,
  tech,
  index,
  hexesHovered,
  setHexesHovered,
}) {
  const [hovered, setHovered] = useState(false);

  function onMouseEnter() {
    setHexesHovered(true);
    setHovered(true);
  }

  function onMouseLeave() {
    setHexesHovered(false);
    setHovered(false);
  }

  return (
    <svg
      viewBox="0 0 543 610"
      width="227"
      height="255"
      preserveAspectRatio="xMidYMid meet"
      className={`hexagon ${hovered ? "scaled" : ""}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <g clipPath="url(#clip0)" transform="translate(-372 -54)">
        <defs>
          <clipPath id="clip0">
            <rect x="372" y="54" width="543" height="610" />
          </clipPath>
          <pattern
            id={`img${index}`}
            patternUnits="objectBoundingBox"
            x="0"
            y="0"
            height="1"
            width="1"
          >
            <image
              href={image}
              width="543"
              height="610"
              className={hexesHovered ? (hovered ? "" : "faded") : ""}
            />
          </pattern>
        </defs>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <path
            className={`hex-path`}
            id={`hex${index}`}
            d="M643.5 55.5 915 189.5 915 529.5 643.5 663.5 372 529.5 372 189.5Z"
            fill={`url(#img${index})`}
          />
        </a>
      </g>
      <path
        className={`text-background ${hovered ? "dissolve" : ""}`}
        d="M-25,425 l297,146 l297, -147"
        stroke="#212121"
        strokeWidth="70"
        fill="transparent"
      />
      <text
        className={`proj-name ${hovered ? "dissolve" : ""}`}
        textLength="300px"
        x="210"
        y="410"
        lengthAdjust="spacingAndGlyphs"
      >
        {title}
      </text>
      <text
        textLength="200px"
        x="267"
        y="652"
        className={`proj-tech ${hovered ? "dissolve" : ""}`}
        textAnchor="end"
      >
        {tech}
      </text>
    </svg>
  );
}

export default Hexagon;
