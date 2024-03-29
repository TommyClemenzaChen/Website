import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <nav className="navBar">
      <a
        style={{
          fontFamily: "arial",
          paddingLeft: "20px",
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        Welcome!
      </a>
      <ul>
        <li>
          <a href="https://linkedin.com/in/tomchen175/">
            <img
              src="https://static-exp1.licdn.com/sc/h/eahiplrwoq61f4uan012ia17i"
              alt="LinkedIn Logo"
            />
            
          </a>
        </li>
        <li>
          <a href="https://github.com/TommyClemenzaChen">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub Logo"
            />
          </a>
        </li>
        <li>
          <a href="mailto:tchen175@ucsc.edu">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
              alt="email logo"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}
