import { useState, useEffect } from 'react'
import './NasaEvents.css'

export default function NasaEvents() {
  const [apod, setApod] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [answer, setAnswer] = useState(null)

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_NASA_API_KEY}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed: ${res.status}`)
        return res.json()
      })
      .then((data) => {
        setApod(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <p className="nasa-status">Loading...</p>
  if (error)   return <p className="nasa-status">Error: {error}</p>

  return (
    <section className="nasa-events">
      <h2 className="nasa-heading">Astronomy Picture of the Day</h2>
      <p className="nasa-sub">{apod.date}</p>

      {apod.media_type === 'image' ? (
        <img className="apod-image" src={apod.url} alt={apod.title} />
      ) : (
        <iframe className="apod-video" src={apod.url} title={apod.title} allowFullScreen />
      )}

      <h3 className="apod-title">{apod.title}</h3>
      <p className="apod-explanation">{apod.explanation}</p>

      <div className="apod-game">
        <p className="apod-game-question">Do you like the picture of today?</p>
        {answer === null ? (
          <div className="apod-game-buttons">
            <button onClick={() => setAnswer('yes')}>Yes</button>
            <button onClick={() => setAnswer('no')}>No</button>
          </div>
        ) : (
          <div className="apod-game-result">
            <p>{answer === 'yes' ? '🌌 Glad you liked it!' : '🔭 Maybe tomorrow\'s will be better!'}</p>
            <button onClick={() => setAnswer(null)}>Try again</button>
          </div>
        )}
      </div>
    </section>
  )
}
