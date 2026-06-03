import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './auth.css'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const savedUsername = localStorage.getItem('username')
    const savedPassword = localStorage.getItem('password')

    if (username === savedUsername && password === savedPassword) {
      navigate('/events')
    } else {
      setError('Incorrect username or password.')
    }
  }

  return (
    <section className="auth-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="auth-form">
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>

        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button type="submit">Login</button>
      </form>

      {error && <p className="auth-error">{error}</p>}
    </section>
  )
}
