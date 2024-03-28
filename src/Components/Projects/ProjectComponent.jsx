import React from "react";
import PropTypes from 'prop-types';
import "./Project.css";

export default function ProjectComponent(props) {
  return (
    <div className="project">
      <img
        src={props.image}
        alt="project image"
      ></img>
      <h2>{props.projectName}</h2>
      <p>{props.description}</p>
    </div>
  );
  
}
ProjectComponent.defaultProps = {
    projectName: "Project Name",
    description: "Description of the project",
    image: "https://via.placeholder.com/150",
}

ProjectComponent.propTypes = {
    projectName: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
}
