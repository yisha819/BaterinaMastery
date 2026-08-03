import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="section section-soft">
      <h2 className="section-title">Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div className="info-card project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noreferrer" className="project-link">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
