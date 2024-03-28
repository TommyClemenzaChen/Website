import React from "react";
import ProjectComponent from "./ProjectComponent";

export default function ProjectSection() {
  return (
    <div>
      <ProjectComponent
        projectName="Project 1"
        description="Description of Project 1"
        image="https://via.placeholder.com/150"
      />
      <ProjectComponent
        projectName="Project 2"
        description="Description of Project 2"
        image="https://via.placeholder.com/150"
      />
      <ProjectComponent
        projectName="Project 3"
        description="Description of Project 3"
        image="https://via.placeholder.com/150"
      />
      <ProjectComponent
        projectName="Project 4"
        description="Description of Project 4"
        image="https://via.placeholder.com/150"
      />
      <ProjectComponent
        projectName="Project 5"
        description="Description of Project 5"
        image="https://via.placeholder.com/150"
      />

    </div>
  );
}
