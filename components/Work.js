import HexagonCard from "./Hexagon.js";
import "./Work.css";
/*
on mouse enter, set every other hex to faded

1) check if hover exists on any hex
1b) if No do nothing

*/
const Work = () => {
  function onMouseEnter(event) {
    const hexagons = document.querySelectorAll(".hex-path");
    hexagons.forEach((item) => {
      if (event.target.id !== item.id) {
        item.classList.add("faded");
      }
    });
    event.target.parentElement.parentElement.nextSibling.classList.add(
      "dissolve"
    );
    event.target.parentElement.parentElement.nextSibling.nextSibling.classList.add(
      "dissolve"
    );
    event.target.parentElement.parentElement.nextSibling.nextSibling.nextSibling.classList.add(
      "dissolve"
    );
    event.target.parentElement.parentElement.parentElement.classList.add(
      "scaled"
    );
  }
  function onMouseLeave(event) {
    const hexagons = document.querySelectorAll(".hex-path");
    hexagons.forEach((item) => {
      item.classList.remove("faded");
    });
    event.target.parentElement.parentElement.nextSibling.classList.remove(
      "dissolve"
    );
    event.target.parentElement.parentElement.nextSibling.nextSibling.classList.remove(
      "dissolve"
    );
    event.target.parentElement.parentElement.nextSibling.nextSibling.nextSibling.classList.remove(
      "dissolve"
    );
    event.target.parentElement.parentElement.parentElement.classList.remove(
      "scaled"
    );
  }
  return (
    <div className="page" id="workPage">
      <div className="mosaic-wrap">
        {projs.map((item, index) => {
          return (
            <HexagonCard
              key={index}
              index={index}
              image={item.image}
              name={item.name}
              tech={item.tech}
              link={item.link}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
