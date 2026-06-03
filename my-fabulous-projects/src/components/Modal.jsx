export default function Modal({ name, screenshot, github, tech, writeUp, whatItDoes, whatYouLearned, role, challenges, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        {screenshot && (
          <img className="modal-screenshot" src={screenshot} alt={name} />
        )}

        <div className="modal-body">
          <div className="modal-tags">
            {tech.map((t) => (
              <span key={t} className="project-tag">{t}</span>
            ))}
          </div>

          <h2 className="modal-title">{name}</h2>
          <p className="modal-writeup">{writeUp}</p>

          <div className="modal-section">
            <span className="modal-label">What it does</span>
            <p>{whatItDoes}</p>
          </div>

          <div className="modal-section">
            <span className="modal-label">What I learned</span>
            <p>{whatYouLearned}</p>
          </div>

          <div className="modal-section">
            <span className="modal-label">Challenges</span>
            <p>{challenges}</p>
          </div>

          {role && (
            <div className="modal-section">
              <span className="modal-label">My role</span>
              <p>{role}</p>
            </div>
          )}

          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="project-link project-link--secondary">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
