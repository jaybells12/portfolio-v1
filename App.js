import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/About";
import Certificate from "./components/Certificate";
import Hexagon from "./components/Hexagon";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState, useEffect, useRef, useId } from "react";
import { socialMediaData, certificatesData, projectsData } from "./seedData";

export function App() {
  // console.count("App Component Render");
  const id = useId();
  const sectionsRef = useRef(null);
  const [hexesHovered, setHexesHovered] = useState(false);

  return (
    <>
      <Header sectionsRef={sectionsRef} />
      <main ref={sectionsRef}>
        <AboutMe />
        <section className="page" id="certsPage">
          {certificatesData.map((obj, index) => {
            return (
              <Certificate
                title={obj.title}
                logo={obj.logo}
                link={obj.link}
                key={`${id}cert${index}`}
                index={index}
              />
            );
          })}
        </section>
        <section className="page" id="workPage">
          <div id="work--container">
            {projectsData.map((obj, index) => {
              return (
                <Hexagon
                  title={obj.title}
                  link={obj.link}
                  image={obj.image}
                  tech={obj.tech}
                  key={`${id}proj${index}`}
                  index={index}
                  setHexesHovered={setHexesHovered}
                  hexesHovered={hexesHovered}
                />
              );
            })}
          </div>
        </section>
        <Contact />
      </main>
      <Footer socialMediaData={socialMediaData} />
    </>
  );
}
