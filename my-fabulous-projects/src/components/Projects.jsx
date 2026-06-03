import { useState } from 'react'

function DetailRow({ label, children }) {
  return (
    <div className="project-detail-row">
      <span className="project-detail-label">{label}</span>
      <p className="project-detail-value">{children}</p>
    </div>
  )
}

function ProjectCard({ name, screenshot, github, tech, writeUp, whatItDoes, whatYouLearned, role, challenges }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={`project-card${expanded ? ' project-card--expanded' : ''}`}
      onClick={() => setExpanded((v) => !v)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && setExpanded((v) => !v)}
    >
      <div className="project-image">
        {screenshot ? (
          <img src={screenshot} alt={name} />
        ) : (
          <div className="project-image-placeholder" aria-hidden="true" />
        )}
      </div>

      <div className="project-body">
        <div className="project-tags">
          {tech.map((t) => (
            <span key={t} className="project-tag">{t}</span>
          ))}
        </div>

        <h3 className="project-title">{name}</h3>
        <p className="project-description">{writeUp}</p>

        <div className="project-actions">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link project-link--secondary"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub
            </a>
          )}
        </div>

        {expanded && (
          <div className="project-details">
            <DetailRow label="What it does">{whatItDoes}</DetailRow>
            <DetailRow label="What I learned">{whatYouLearned}</DetailRow>
            <DetailRow label="Challenges">{challenges}</DetailRow>
            {role && <DetailRow label="My role">{role}</DetailRow>}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Projects({ projects }) {
  return (
    <section id="projects">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  )
}
