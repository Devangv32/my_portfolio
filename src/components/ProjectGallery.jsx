import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ProjectGallery = () => {
  const projects = [
    {
      id: 1,
      name: "Project 1",
      description: "Description of Project 1",
      image: "/images/project1.jpg",
    },
    {
      id: 2,
      name: "Project 2",
      description: "Description of Project 2",
      image: "/images/project2.jpg",
    },
  ];

  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.name}</h2>
          <LazyLoadImage
            src={project.image}
            alt={project.name}
            effect="blur"
            width="100%"
            height="auto"
          />
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectGallery;
