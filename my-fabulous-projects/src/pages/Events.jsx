import { useState } from 'react'
import NasaEvents from '../components/NasaEvents'
import './auth.css'

export default function Events() {
  const [view, setView] = useState('login')
  const [loggedIn, setLoggedIn] = useState(false)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleRegister = (e) => {
    e.preventDefault()
    localStorage.setItem('username', username)
    localStorage.setItem('password', password)
    setMessage('Account created! You can now log in.')
    setUsername('')
    setPassword('')
    setView('login')
  }

  const handleLogin = (e) => {
    e.preventDefault()
    const savedUsername = localStorage.getItem('username')
    const savedPassword = localStorage.getItem('password')

    if (username === savedUsername && password === savedPassword) {
      setLoggedIn(true)
    } else {
      setMessage('Incorrect username or password.')
    }
  }

  if (loggedIn) {
    return <NasaEvents />
  }

  return (
    <section className="auth-page">
      <div className="auth-tabs">
        <button
          className={view === 'login' ? 'auth-tab active' : 'auth-tab'}
          onClick={() => { setView('login'); setMessage('') }}
        >
          Login
        </button>
        <button
          className={view === 'register' ? 'auth-tab active' : 'auth-tab'}
          onClick={() => { setView('register'); setMessage('') }}
        >
          Register
        </button>
      </div>

      {view === 'register' ? (
        <form onSubmit={handleRegister} className="auth-form">
          <label>
            Username
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </label>
          <label>
            Password
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>
          <button type="submit">Create Account</button>
        </form>
      ) : (
        <form onSubmit={handleLogin} className="auth-form">
          <label>
            Username
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </label>
          <label>
            Password
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>
          <button type="submit">Login</button>
        </form>
      )}

      {message && <p className="auth-message">{message}</p>}
    </section>
  )
}
