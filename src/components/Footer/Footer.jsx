import './Footer.css'

const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <p className="footer__brand-name">Laura Blanco</p>
            <p className="footer__brand-sub">Fotografía de Familia · Tucumán</p>
            <p className="footer__brand-desc">
              Capturo el amor entre familias con una mirada cálida y cercana.
              Cada sesión es única, como cada familia.
            </p>
          </div>

          <div>
            <p className="footer__col-title">Navegación</p>
            <ul className="footer__nav">
              {[['hero','Inicio'],['gallery','Sesiones'],['booking','Reservar turno'],['contact','Contacto']].map(([id, l]) => (
                <li key={id}><span className="footer__nav-link" onClick={() => go(id)}>{l}</span></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer__col-title">Contacto</p>
            <div className="footer__contact-item">
              🌸 <a href="https://wa.me/5493812345678" target="_blank" rel="noopener noreferrer">+54 9 381 234-5678</a>
            </div>
            <div className="footer__contact-item">
              ✉️ <a href="mailto:hola@laurablanco.com.ar">hola@laurablanco.com.ar</a>
            </div>
            <div className="footer__contact-item">
              📍 Tucumán, Argentina
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">© {new Date().getFullYear()} <span>Laura Blanco Fotografía</span>. Todos los derechos reservados.</p>
          <p className="footer__heart">Hecho con 🌸 en Tucumán</p>
        </div>
      </div>
    </footer>
  )
}
