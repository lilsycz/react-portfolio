import Projects from './components/Projects'
import './components/Projects.css'

const projects = [
  {
    id: 1,
    name: 'Project One',
    screenshot: null,
    github: 'https://github.com/username/project-one',
    tech: ['React', 'CSS', 'Vite'],
    writeUp: 'A one or two sentence pitch — the elevator version of the project.',
    whatItDoes: 'Describe the core functionality. What can a user actually do with it?',
    whatYouLearned: 'What skills, patterns, or concepts did you pick up building this?',
    role: null,
    challenges: 'What was the hardest part and how did you work through it?',
  },
  {
    id: 2,
    name: 'Project Two',
    screenshot: null,
    github: 'https://github.com/username/project-two',
    tech: ['JavaScript', 'Node.js', 'REST API'],
    writeUp: 'A one or two sentence pitch — the elevator version of the project.',
    whatItDoes: 'Describe the core functionality. What can a user actually do with it?',
    whatYouLearned: 'What skills, patterns, or concepts did you pick up building this?',
    role: 'Frontend developer — worked alongside a backend teammate who handled the API.',
    challenges: 'What was the hardest part and how did you work through it?',
  },
]

function App() {
  return <Projects projects={projects} />
}

export default App
