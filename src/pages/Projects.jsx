import React, { lazy, Suspense } from 'react';

const ProjectGallery = lazy(() => import('../components/ProjectGallery'));

const Projects = () => {
  return (
    <section className="projects">
      <h1>Projects</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectGallery />
      </Suspense>
    </section>
  );
};

export default Projects;