import { Link } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  return (
    <nav id="nav">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/portfolio" className="nav-link">Portfolio</Link>
      <Link to="/events" className="nav-link">Events</Link>
    </nav>
  )
}
