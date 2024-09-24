import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import ThirdSectionProject from "./ThirdSectionProject";
import FirstSectionProject from "./FirstSectionProject";

function Projects() {
  const [visibleSection, setVisibleSection] = useState(null);

  const showSection = (section) => {
    setVisibleSection(section);
  };

  return (
    <div className="projects-container" id="projects">
      <div className="container m-auto">
        <div className="text-center mt-5 text-light">
          <h2>My Projects</h2>
          <p>
            My name is Eman Ebrahim, I live in Sharqia. These are my projects.
          </p>
        </div>

        <div className="row">
          <nav className="d-flex justify-content-center">
            <button
              className="border border-white first-btn"
              onClick={() => showSection("first")}
            >
              1st section
            </button>
            <button
              className="border border-white second-btn"
              onClick={() => {
                const element = document.getElementById(
                  "second-section-projects"
                );
                if (element) {
                  const SectionOne = document.getElementById(
                    "first-section-projects"
                  );
                  SectionOne.style.display="none";
                  const SectionThree = document.getElementById(
                    "first-section-projects"
                  );
                  SectionThree.style.display="none"
                }
              }}
            >
              2nd section
            </button>
            <button
              className="border border-white third-btn"
              onClick={() => showSection("third")}
            >
              3rd section
            </button>
          </nav>
        </div>

        {visibleSection === "first" && <FirstSectionProject />}
        {visibleSection === "third" && <ThirdSectionProject />}
      </div>
      <Outlet />
    </div>
  );
}

export default React.memo(Projects);
