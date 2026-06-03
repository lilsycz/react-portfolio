import { useState } from 'react'
import './auth.css'

export default function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    localStorage.setItem('username', username)
    localStorage.setItem('password', password)

    setMessage(`Account created for ${username}!`)
    setUsername('')
    setPassword('')
  }

  return (
    <section className="auth-page">
      <h1>Register</h1>
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

        <button type="submit">Create Account</button>
      </form>

      {message && <p className="auth-message">{message}</p>}
    </section>
  )
}
