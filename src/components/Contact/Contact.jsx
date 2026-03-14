import { PHOTOGRAPHER_WA, PHOTOGRAPHER_MAIL } from '../../utils/booking'
import './Contact.css'

const WA_URL = `https://wa.me/${PHOTOGRAPHER_WA}?text=${encodeURIComponent('Hola Laura! 🌸 Quisiera consultar sobre una sesión fotográfica.')}`

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__blob" />
      <div className="container">
        <div className="contact__inner">

          {/* Visual */}
          <div className="contact__visual">
            <div className="contact__img-frame">
              <img
                className="contact__img"
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=700&q=80"
                alt="Laura Blanco, fotógrafa"
              />
              <div className="contact__flower">🌸</div>
              <div className="contact__quote">
                <p>"Fotografiar es un acto de amor."</p>
                <cite>— Laura Blanco</cite>
              </div>
            </div>
          </div>

          {/* Contenido */}
          <div className="contact__content">
            <span className="tag">Hablemos</span>
            <h2 className="contact__title">
              ¿Tenés una idea<br />en mente?<br />
              <em>¡Escribime!</em>
            </h2>
            <p className="contact__desc">
              Me encanta conocer a cada familia antes de la sesión.
              Contame tu historia, tus sueños y lo que querés guardar
              para siempre. Estoy en Tucumán y respondo rápido 🌿
            </p>

            <div className="contact__methods">
              <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                className="contact__method wa">
                <div className="contact__method-ico">💬</div>
                <div className="contact__method-info">
                  <p className="contact__method-lbl">WhatsApp</p>
                  <p className="contact__method-val">+54 9 381 234-5678</p>
                </div>
                <span className="contact__method-arrow">→</span>
              </a>

              <a href={`mailto:${PHOTOGRAPHER_MAIL}?subject=Consulta sesión fotográfica`}
                className="contact__method">
                <div className="contact__method-ico">📧</div>
                <div className="contact__method-info">
                  <p className="contact__method-lbl">Email</p>
                  <p className="contact__method-val">{PHOTOGRAPHER_MAIL}</p>
                </div>
                <span className="contact__method-arrow">→</span>
              </a>

              <div className="contact__method" style={{ cursor: 'default' }}>
                <div className="contact__method-ico">📍</div>
                <div className="contact__method-info">
                  <p className="contact__method-lbl">Ubicación</p>
                  <p className="contact__method-val">San Miguel de Tucumán, Argentina</p>
                </div>
              </div>
            </div>

            <div className="contact__social">
              <span className="contact__social-lbl">Seguime en</span>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"
                className="contact__social-btn" aria-label="Instagram">📷</a>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"
                className="contact__social-btn" aria-label="Facebook">👍</a>
              <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer"
                className="contact__social-btn" aria-label="TikTok">🎵</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
