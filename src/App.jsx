import React, { useState } from "react";
import Header from "./Components/Header/Header.jsx";
import AboutMe from "./Components/AboutMe/AboutMe.jsx";
import ProjectSection from "./Components/Projects/ProjectSection.jsx";
import background from "./assets/background.jpg";

function App() {
  return (
    <>
      

      <main className="scroll-container">
        <Header />
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
          }}
        >
          <AboutMe />
          <ProjectSection />
        </div>
      </main>
    </>
  );
}

export default App;
