import { useState } from 'react'
import Modal from './Modal'
import './Modal.css'

function ProjectCard({ project, onSelect }) {
  return (
    <div
      className="project-card"
      onClick={() => onSelect(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onSelect(project)}
    >
      <div className="project-image">
        {project.screenshot ? (
          <img src={project.screenshot} alt={project.name} />
        ) : (
          <div className="project-image-placeholder" aria-hidden="true" />
        )}
      </div>

      <div className="project-body">
        <div className="project-tags">
          {project.tech.map((t) => (
            <span key={t} className="project-tag">{t}</span>
          ))}
        </div>

        <h3 className="project-title">{project.name}</h3>
        <p className="project-description">{project.writeUp}</p>

        <div className="project-actions">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link project-link--secondary"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
        ))}
      </div>

      {selectedProject && (
        <Modal {...selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  )
}
