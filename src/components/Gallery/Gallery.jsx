import './Gallery.css'

const PHOTOS = [
  { src: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&q=80', label: 'Familia completa' },
  { src: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=600&q=80', label: 'Mamá & bebé' },
  { src: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=600&q=80', label: 'Amor de pareja' },
  { src: 'https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=600&q=80', label: 'Newborn' },
  { src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80', label: 'Retrato' },
  { src: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=600&q=80', label: 'Embarazo' },
  { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80', label: 'Hermanos' },
  { src: 'https://images.unsplash.com/photo-1581952976147-5a2d15560349?w=600&q=80', label: 'Sonrisas' },
]

const SERVICES = [
  { emoji: '👨‍👩‍👧‍👦', name: 'Familia', desc: 'Sesiones para toda la familia, en exterior o en casa. Un momento mágico juntos.' },
  { emoji: '🍼', name: 'Bebés & Newborn', desc: 'Primeros días de vida. Recuerdo para siempre de esa pequeña perfección.' },
  { emoji: '🤰', name: 'Embarazo', desc: 'La espera más bella. Sesiones pensadas para mamás radiantes en Tucumán.' },
  { emoji: '🎂', name: 'Infantil', desc: 'Cumpleaños, comuniones y cada festejo especial de tus hijos.' },
]

const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="gallery__header">
          <span className="tag">Sesiones fotográficas</span>
          <h2 className="gallery__title">
            Momentos reales,<br />
            <em>amor verdadero</em>
          </h2>
          <p className="gallery__sub">
            Cada familia es única. Por eso cada sesión es diseñada
            especialmente para vos, con calidez, naturalidad y mucho amor.
          </p>
        </div>

        {/* Galería */}
        <div className="gallery__grid">
          {PHOTOS.map((p, i) => (
            <div className="gallery__item" key={i}>
              <img src={p.src} alt={p.label} loading="lazy" />
              <div className="gallery__item-label">
                <span>{p.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Servicios */}
        <div className="gallery__services">
          {SERVICES.map((s, i) => (
            <div className="service-card" key={i} onClick={() => go('booking')}>
              <span className="service-card__emoji">{s.emoji}</span>
              <h4 className="service-card__name">{s.name}</h4>
              <p className="service-card__desc">{s.desc}</p>
              <span className="service-card__link">Reservar →</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
