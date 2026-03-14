import './Hero.css'

const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__blob" />
      <div className="hero__deco-left" />

      <div className="hero__inner">
        {/* Texto */}
        <div className="hero__text">
          <p className="hero__pre">Fotografía de familia · Tucumán</p>

          <h1 className="hero__h1">
            Amor que<br />
            <strong>se ve.</strong>
            <span className="hero__h1-sub">y se siente para siempre.</span>
          </h1>

          <p className="hero__desc">
            Hola, soy <strong style={{ fontWeight: 400, color: 'var(--terracotta)' }}>Laura</strong>.
            Fotografío familias en Tucumán con una mirada
            cálida y cercana. Mi trabajo es preservar esos instantes
            cotidianos que se convierten en el mayor tesoro.
          </p>

          <div className="hero__actions">
            <button className="btn btn-terra" onClick={() => go('booking')}>
              Reservar mi sesión
            </button>
            <button className="btn btn-ghost" onClick={() => go('gallery')}>
              Ver sesiones
            </button>
          </div>

          <div className="hero__badge">
            <div className="hero__badge-line" />
            <span className="hero__badge-text">
              "Cada familia tiene su propia luz"
            </span>
          </div>
        </div>

        {/* Collage */}
        <div className="hero__collage">
          <div className="hero__photo hero__photo--main">
            <img
              src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&q=80"
              alt="Sesión familiar"
            />
          </div>
          <div className="hero__photo hero__photo--sm">
            <img
              src="https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=400&q=80"
              alt="Mamá y bebé"
            />
          </div>
          <div className="hero__photo hero__photo--xs">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?w=300&q=80"
              alt="Pareja"
            />
          </div>

          <div className="hero__sticker" onClick={() => go('booking')}>
            Reservá<br />tu turno
          </div>
        </div>
      </div>

      <div className="hero__scroll">
        <div className="hero__scroll-dot" />
        <span className="hero__scroll-text">Descubrí</span>
      </div>
    </section>
  )
}
