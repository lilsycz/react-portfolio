import './Home.css'

const contact = [
  { label: 'Email', value: 'jadezxchan@gmail.com', href: 'mailto:jadezxchan@gmail.com' },
  { label: 'Phone', value: '+46 793 531 881', href: 'tel:+46793531881' },
  { label: 'LinkedIn', value: 'linkedin.com/in/jadezxchen', href: 'https://linkedin.com/in/jadezxchen' },
  { label: 'Based in', value: 'Helsingborg, Sweden · Open to relocate', href: null },
  { label: 'Availability', value: 'Available immediately', href: null },
]

export default function Home() {
  return (
    <section id="home">
      <div className="home-hero">
        <h1>Hi, I'm Hsuan</h1>
        <p>Welcome to my website!</p>
      </div>

      <div className="contact-section">
        <h2 className="contact-heading">Contact</h2>
        <ul className="contact-list">
          {contact.map((item) => (
            <li key={item.label} className="contact-item">
              <span className="contact-label">{item.label}</span>
              {item.href ? (
                <a href={item.href} className="contact-value" target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  {item.value}
                </a>
              ) : (
                <span className="contact-value">{item.value}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
