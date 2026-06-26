import './About.css'

const skills = [
  { category: 'Frontend', items: ['HTML5 / CSS3', 'JavaScript', 'React.js', 'TypeScript'] },
  { category: 'Workflow', items: ['MS Office', 'Git / Version Control', 'REST API Integration', 'Shopify / WordPress'] },
  { category: 'Architecture & 3D', items: ['Rhino + Grasshopper', 'Revit / AutoCAD', 'SketchUp', 'Blender'] },
  { category: 'Visualisation', items: ['V-Ray / Enscape', 'Unreal Engine 5', 'Unity', 'Applied Robotics'] },
  { category: 'Design & UX', items: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign'] },
  { category: 'Languages', items: ['Mandarin (Native)', 'English (Fluent)', 'Swedish'] },
]

const experiences = [
  {
    title: 'Web & Brand Designer',
    company: 'Refab Lab AB',
    location: 'Malmö, Sweden',
    type: 'Part-time',
    period: 'Jan 2026 — Present',
    bullets: [
      'Independently built a complete Shopify e-commerce presence from scratch, including store setup, product page design, theme customisation, and end-to-end purchase flow, establishing UI guidelines for consistent visual expression across breakpoints.',
      'Developed two custom booking calendars with interactive booking system, image previews and direct product links using Liquid and JavaScript.',
      'Built information architecture and service entry flow, reducing the booking journey from 5 steps to 2, applying conversion thinking and UX logic to measurably improve user behavior.',
      'Implemented tag-based access control to display different page layouts and content to different customer groups. Restructured website content and information architecture with SEO foundations to improve organic visibility.',
    ],
    tags: ['HTML/CSS/JS', 'Shopify', 'Figma', 'Brand Design', 'Git'],
  },
  {
    title: 'Course Coordinator — Applied Robotics for Architects',
    company: 'Lund University',
    location: 'Sweden',
    type: 'Volunteering',
    period: 'Sep 2024 — Jan 2025',
    bullets: [
      'Coordinated weekly operations for 36 students across Architecture and Automation from 8+ countries, aligning deliverables, timelines, and communication in a cross-disciplinary setting.',
      'Proposed restructuring course materials into "architect" language, adopted by the department to improve cross-disciplinary collaboration.',
      'Translated complex technical requirements into structured documentation — briefs, checklists, step-by-step guides — reducing blockers and improving team clarity.',
    ],
    tags: ['Coordination', 'Technical Writing', 'Applied Robotics', 'Cross-disciplinary'],
  },
  {
    title: 'Interior & Visual Merchandising Designer',
    company: 'Meileheshi / PALA',
    location: 'Wuhan, China',
    type: 'Internship',
    period: 'Aug 2022 — Jan 2023',
    bullets: [
      'Designed spatial layouts for 2 fast-food restaurant sites (500+ m² total), mapping customer flow from entrance to counter and seating. Coordinated furniture, fixtures, and material palettes for a cohesive brand experience.',
      'Designed layered lighting and a standardized signage and display system with reusable templates, ensuring brand consistency and reducing setup time across both locations.',
      'Conducted site surveys and peak-hour flow observations; adjusted seating and service-area arrangements to enhance circulation and operational efficiency.',
    ],
    tags: ['AutoCAD', 'SketchUp', 'V-Ray', 'Interior Design', 'Visual Merchandising'],
  },
]

const education = [
  {
    degree: 'IT: Front-end Development',
    school: 'Sundsgårdens Folkhögskola',
    location: 'Sweden',
    period: 'Jan 2026 — Present',
    tags: ['React.js', 'JavaScript', 'HTML/CSS', 'Component-based development'],
  },
  {
    degree: 'MSc, Digital Architecture',
    school: 'Lund University',
    location: 'Sweden',
    period: '2023 — 2025',
    tags: ['Computational Design', 'Applied Robotics', 'Biomaterials', 'Space Architecture'],
  },
  {
    degree: 'BA, Environmental Design',
    school: 'China Three Gorges University',
    location: 'China',
    period: '2018 — 2022',
    tags: ['Sustainable Materials', 'Interior Design', 'Light Design', 'Spatial Design'],
  },
]

const awards = [
  { title: 'Lund University Global Scholarship (Top 1.8%)', year: '2023' },
  { title: 'China National Encouragement Scholarship (Top 2%)', year: '2019 — 2022' },
  { title: 'First-Class Scholarship (Top 3%)', year: '2019 — 2022' },
  { title: 'Outstanding Graduate Thesis and Dissertation (Top 5%)', year: '2022' },
]

const publications = [
  {
    title: '"The Living Habitat: A Self-Monitoring and Self-Repairing System for Lunar Architecture"',
    detail: "Master's Thesis (2025)",
  },
  {
    title: '"Exploration and Reflection on the Construction of Humanized Space in the Post-Industrial Era"',
    detail: 'City & House, Vol 08 (2021), p. 212–21.',
  },
]

export default function About() {
  return (
    <section id="about">
      <div className="about-sidebar">
        <span className="about-sidebar-text">Architecture · Frontend · UIUX</span>
        <span className="about-sidebar-text">Helsingborg, Sweden · Available immediately · Open to relocate</span>
      </div>

      <div className="about-content">
        <h1>About</h1>
        <p className="about-intro">"Web Architect" - I create visually distinctive, user-centered web and interface experiences, informed by architectural thinking in structure, hierarchy, and spatial flow.</p>

        <h2 className="about-section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.category} className="skills-group">
              <h3 className="skills-category">{group.category}</h3>
              <ul className="skills-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="about-section-title">Background</h2>
        <p className="about-background">Designer and frontend developer working at the intersection of physical space and digital interface. Background in Environmental Design and Digital Architecture, now deepening React.js and component-based development. Both disciplines share the same obsession with structure, proportion, and user experience.</p>

        <h2 className="about-section-title">Experience</h2>
        <div className="experience-list">
          {experiences.map((exp, i) => (
            <div key={i} className="experience-item">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-company">{exp.company} · {exp.location} · {exp.type}</p>
                </div>
                <span className="experience-period">{exp.period}</span>
              </div>
              <ul className="experience-bullets">
                {exp.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
              <div className="experience-tags">
                {exp.tags.map((tag) => (
                  <span key={tag} className="experience-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h2 className="about-section-title">Education</h2>
        <div className="experience-list">
          {education.map((edu, i) => (
            <div key={i} className="experience-item">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">{edu.degree}</h3>
                  <p className="experience-company">{edu.school} · {edu.location}</p>
                </div>
                <span className="experience-period">{edu.period}</span>
              </div>
              <div className="experience-tags">
                {edu.tags.map((tag) => (
                  <span key={tag} className="experience-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h2 className="about-section-title">Awards</h2>
        <ul className="awards-list">
          {awards.map((award, i) => (
            <li key={i} className="award-item">
              <span className="award-title">{award.title}</span>
              <span className="award-year">{award.year}</span>
            </li>
          ))}
        </ul>

        <h2 className="about-section-title">Publications</h2>
        <ul className="publications-list">
          {publications.map((pub, i) => (
            <li key={i} className="publication-item">
              <p className="publication-title">{pub.title}</p>
              <p className="publication-detail">{pub.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
