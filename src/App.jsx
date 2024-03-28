import React, { useState } from "react";
import Header from "./Components/Header/Header.jsx";
import AboutMe from "./Components/AboutMe/AboutMe.jsx";
import ProjectSection from "./Components/Projects/ProjectSection.jsx";
import background from "./assets/background.jpg";

function App() {
  return (
    <>
      <Header />
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          
        }}
      >
        <main className="scroll-container">
          <AboutMe/>
          <ProjectSection />
        </main>
      </div>
    </>
  );
}

export default App;
