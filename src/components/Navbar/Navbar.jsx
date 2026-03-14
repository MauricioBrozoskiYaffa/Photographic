import { useState, useEffect } from 'react'
import './Navbar.css'

const LINKS = [
  { label: 'Inicio',    id: 'hero' },
  { label: 'Sesiones', id: 'gallery' },
  { label: 'Turnos',   id: 'booking' },
  { label: 'Contacto', id: 'contact' },
]

export default function Navbar() {
  const [solid, setSolid]   = useState(false)
  const [open, setOpen]     = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY > 60)
      const pos = window.scrollY + 130
      LINKS.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= pos && el.offsetTop + el.offsetHeight > pos) setActive(id)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className={`nav ${solid ? 'solid' : ''}`}>
      <div className="nav__wrap">
        <div className="nav__logo" onClick={() => go('hero')}>
          <span className="nav__logo-name">Laura Blanco</span>
          <span className="nav__logo-tag">Fotografía · Tucumán</span>
        </div>

        <ul className={`nav__links ${open ? 'open' : ''}`}>
          {LINKS.map(l => (
            <li key={l.id}>
              <span className={`nav__link ${active === l.id ? 'on' : ''}`} onClick={() => go(l.id)}>
                {l.label}
              </span>
            </li>
          ))}
          <li>
            <button className="nav__cta" onClick={() => go('booking')}>Reservar sesión</button>
          </li>
        </ul>

        <button className="nav__cta nav__cta-desk" onClick={() => go('booking')}>
          Reservar sesión
        </button>

        <button className={`nav__burger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} aria-label="Menú">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
