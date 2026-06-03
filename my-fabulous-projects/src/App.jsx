import Projects from './components/Projects'
import './components/Projects.css'

const images = import.meta.glob('./assets/images/*', { eager: true })

const projects = [
  {
    id: 1,
    name: 'Memory Game - Swedish Match',
    screenshot: images['./assets/images/p1.png']?.default,
    github: 'https://github.com/lilsycz/Group-game-assignment',
    tech: ['React', 'CSS', 'javascript'],
    writeUp: 'A memory card matching game based on Swedish regions.',
    whatItDoes: 'Players flip cards to match regions with their associated culture and food, with a countdown timer and difficulty levels.',
    whatYouLearned: 'React state management with useState\nGame logic: card flipping, match checking, win/lose conditions\nTimer implementation with setInterval\nComponent structure and separating logic from UI\n',
    role: 'Core game logic — card flip mechanics, match checking, move counter, timer, difficulty levels, win/lose state, and restart functionality.',
    challenges: ' What was the hardest part and how did you work throughManaging multiple states simultaneously (flipped cards, matched count, timer, game status) and preventing bugs like double-clicking the same card or registering multiple event listeners.',
  },
  {
    id: 2,
    name: 'Hand Flower',
    screenshot: images['./assets/images/handfirework.png']?.default,
    github: 'https://github.com/lilsycz/HandFlower',
    tech: ['HTML, CSS, JavaScript, WebGL, Three.js, MediaPipe'],
    writeUp: 'An interactive web app that uses hand tracking to create a virtual flower that blooms based on the user’s hand movements.',
    whatItDoes: 'A real-time interactive installation that uses your devices camera to track hand gestures. When you open your hand, particles bloom into a flower shape with glowing effects; when you close your fist, they contract. Supports up to 4 hands simultaneously, with multiple visual modes (Flower trails, Nebula bloom, Minimal particles).',
    whatYouLearned: 'Working with Three.js for 3D particle systems and WebGL rendering; Integrating MediaPipe for real-time hand landmark tracking; Translating gesture data (finger openness ratio) into visual animation; Post-processing effects like bloom with UnrealBloomPass; Fallback logic for when camera is unavailable',
    role: 'Independent project',
    challenges: 'Comparing fingertip distance vs. knuckle distance to detect open vs. closed hand, and fine-tuning sensitivity so the gesture feels natural.',
  },
  {
    id: 3,
    name: 'Typing Game',
    screenshot: images['./assets/images/p3.png']?.default,
    github: 'https://github.com/lilsycz/typing-game-starter-master',
    tech: ['HTML, CSS, JavaScript'],
    writeUp: 'A simple typing game that challenges users to type random words as quickly and accurately as possible.',
    whatItDoes: 'Generates random words for the user to type, tracks time and accuracy, and provides feedback on performance.',
    whatYouLearned: 'Learned DOM manipulation, timer logic with setInterval, and event-driven programming. Gained clarity on when to use CSS vs JavaScript for UI state changes.',
    role: 'Independent project',
    challenges: 'Preventing duplicate event listeners from stacking up on repeated game rounds.',
  }
]

function App() {
  return <Projects projects={projects} />
}

export default App
