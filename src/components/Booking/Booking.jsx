import { useBooking } from '../../hooks/useBooking'
import { SESSION_TYPES, PHOTOGRAPHER_WA, PHOTOGRAPHER_MAIL } from '../../utils/booking'
import './Booking.css'

const today = new Date().toISOString().split('T')[0]

export default function Booking() {
  const { form, slots, dateState, errors, done, set, sendWA, sendMail, reset } = useBooking()

  if (done) return (
    <section id="booking" className="booking">
      <div className="container">
        <div className="booking__form-card" style={{ maxWidth: 560, margin: '0 auto', borderRadius: 28 }}>
          <div className="booking__success">
            <div className="booking__success-icon">🌸</div>
            <h3>¡Listo, gracias!</h3>
            <p>
              Tu consulta fue enviada. Laura se va a comunicar con vos
              a la brevedad para confirmar todos los detalles de la sesión.
            </p>
            <button className="btn btn-ghost" onClick={reset} style={{ borderRadius: 40 }}>
              Hacer otra consulta
            </button>
          </div>
        </div>
      </div>
    </section>
  )

  return (
    <section id="booking" className="booking">
      <div className="booking__bg-deco" />
      <div className="container">
        <div className="booking__layout">

          {/* Info */}
          <div className="booking__info">
            <span className="tag">Reservas online</span>
            <h2 className="booking__info-title">
              Reservá tu<br />sesión con<br /><em>Laura</em>
            </h2>
            <p className="booking__info-desc">
              Completá el formulario, verificamos la disponibilidad del día
              que elegís y te confirmamos la sesión en menos de 24 horas.
            </p>

            <div className="booking__steps">
              {[
                'Elegí el tipo de sesión y la fecha.',
                'Verificamos que el día esté libre.',
                'Confirmamos por WhatsApp o email.',
                '¡Nos vemos en la sesión! 📸',
              ].map((t, i) => (
                <div className="booking__step" key={i}>
                  <div className="booking__step-num">{i + 1}</div>
                  <p className="booking__step-text">{t}</p>
                </div>
              ))}
            </div>

            <div className="booking__direct">
              <a href={`https://wa.me/${PHOTOGRAPHER_WA}`} target="_blank" rel="noopener noreferrer"
                className="booking__direct-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#25d366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp: +54 9 381 234-5678
              </a>
              <a href={`mailto:${PHOTOGRAPHER_MAIL}`} className="booking__direct-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="4" width="20" height="16" rx="3"/><path d="M2 7l10 7 10-7"/>
                </svg>
                {PHOTOGRAPHER_MAIL}
              </a>
            </div>
          </div>

          {/* Formulario */}
          <div className="booking__form-card">
            <h3 className="booking__form-title">Formulario de reserva 🌸</h3>

            <div className="f-row">
              <div className="f-field">
                <label className="f-label">Nombre *</label>
                <input className={`f-input ${errors.name ? 'err' : ''}`} type="text"
                  placeholder="Tu nombre" value={form.name} onChange={e => set('name', e.target.value)} />
                {errors.name && <span className="f-error">{errors.name}</span>}
              </div>
              <div className="f-field">
                <label className="f-label">Teléfono</label>
                <input className="f-input" type="tel"
                  placeholder="+54 9 381..." value={form.phone} onChange={e => set('phone', e.target.value)} />
              </div>
            </div>

            <div className="f-field">
              <label className="f-label">Email *</label>
              <input className={`f-input ${errors.email ? 'err' : ''}`} type="email"
                placeholder="tu@email.com" value={form.email} onChange={e => set('email', e.target.value)} />
              {errors.email && <span className="f-error">{errors.email}</span>}
            </div>

            <div className="f-field">
              <label className="f-label">Tipo de sesión *</label>
              <select className={`f-select ${errors.type ? 'err' : ''}`} value={form.type}
                onChange={e => set('type', e.target.value)}>
                <option value="">Elegí una opción</option>
                {SESSION_TYPES.map(t => (
                  <option key={t.v} value={t.l}>{t.l}</option>
                ))}
              </select>
              {errors.type && <span className="f-error">{errors.type}</span>}
            </div>

            <div className="f-field">
              <label className="f-label">Fecha deseada *</label>
              <input className={`f-input ${errors.date ? 'err' : ''}`} type="date"
                min={today} value={form.date} onChange={e => set('date', e.target.value)} />
              {errors.date && <span className="f-error">{errors.date}</span>}

              {dateState === 'available' && (
                <div className="avail ok">
                  <div className="avail__dot" />
                  ✓ Fecha disponible — elegí tu horario
                </div>
              )}
              {dateState && dateState !== 'available' && (
                <div className="avail bad">
                  <div className="avail__dot" />
                  {dateState === 'sunday' ? 'Los domingos no hay sesiones.' : 'Fecha no disponible. Por favor elegí otro día.'}
                </div>
              )}
            </div>

            {slots.length > 0 && (
              <div className="f-field">
                <label className="f-label">Horario *</label>
                <div className="slots">
                  {slots.map(s => (
                    <div key={s} className={`slot ${form.time === s ? 'sel' : ''}`}
                      onClick={() => set('time', s)}>{s}hs</div>
                  ))}
                </div>
                {errors.time && <span className="f-error">{errors.time}</span>}
              </div>
            )}

            <div className="f-field">
              <label className="f-label">Contame un poco más</label>
              <textarea className="f-textarea"
                placeholder="¿Cuántos integrantes? ¿Tenés alguna idea o lugar en mente? ¿Hay algo especial que quieras recordar?"
                value={form.notes} onChange={e => set('notes', e.target.value)} />
            </div>

            <div className="f-actions">
              <button className="btn btn-terra" onClick={sendWA}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Por WhatsApp
              </button>
              <button className="btn btn-ghost" onClick={sendMail}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="4" width="20" height="16" rx="3"/><path d="M2 7l10 7 10-7"/>
                </svg>
                Por Email
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
