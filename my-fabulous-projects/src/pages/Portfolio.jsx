import Projects from '../components/Projects'
import '../components/Projects.css'

const images = import.meta.glob('../assets/images/*', { eager: true })

const projects = [
  {
    id: 1,
    name: 'Memory Game - Swedish Match',
    screenshot: images['../assets/images/p1.png']?.default,
    github: 'https://github.com/lilsycz/Group-game-assignment',
    tech: ['React', 'CSS', 'javascript'],
    writeUp: 'A memory card matching game based on Swedish regions.',
    whatItDoes: 'Players flip cards to match regions with their associated culture and food, with a countdown timer and difficulty levels.',
    whatYouLearned: 'React state management with useState\nGame logic: card flipping, match checking, win/lose conditions\nTimer implementation with setInterval\nComponent structure and separating logic from UI\n',
    role: 'Core game logic — card flip mechanics, match checking, move counter, timer, difficulty levels, win/lose state, and restart functionality.',
    challenges: 'Managing multiple states simultaneously (flipped cards, matched count, timer, game status) and preventing bugs like double-clicking the same card or registering multiple event listeners.',
  },
  {
    id: 2,
    name: 'Hand Flower',
    screenshot: null,
    github: 'https://github.com/lilsycz/HandFlower',
    tech: ['HTML', 'CSS', 'JavaScript', 'Three.js', 'WebGL', 'MediaPipe Hands'],
    writeUp: 'An interactive web app that uses hand tracking to create a virtual flower that blooms based on hand movements.',
    whatItDoes: 'A real-time interactive installation that uses your device\'s camera to track hand gestures. When you open your hand, particles bloom into a flower shape with glowing effects; when you close your fist, they contract. Supports up to 4 hands simultaneously, with multiple visual modes.',
    whatYouLearned: 'Working with Three.js for 3D particle systems and WebGL rendering; Integrating MediaPipe for real-time hand landmark tracking; Translating gesture data into visual animation; Post-processing effects like bloom with UnrealBloomPass.',
    role: 'Independent project',
    challenges: 'Comparing fingertip distance vs. knuckle distance to detect open vs. closed hand, and fine-tuning sensitivity so the gesture feels natural.',
  },
]

export default function Portfolio() {
  return <Projects projects={projects} />
}
