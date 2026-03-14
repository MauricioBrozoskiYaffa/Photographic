# 🌸 Laura Blanco — Fotografía de Familia · Tucumán

Sitio web profesional construido con **React + Vite**.

## 🚀 Cómo usarlo

```bash
npm install
npm run dev        # → http://localhost:3000
npm run build      # Compilar para producción
```

---

## 📁 Estructura

```
laura-blanco/
├── src/
│   ├── components/
│   │   ├── Navbar/     Navbar.jsx  +  Navbar.css
│   │   ├── Hero/       Hero.jsx    +  Hero.css
│   │   ├── Gallery/    Gallery.jsx +  Gallery.css
│   │   ├── Booking/    Booking.jsx +  Booking.css
│   │   ├── Contact/    Contact.jsx +  Contact.css
│   │   └── Footer/     Footer.jsx  +  Footer.css
│   ├── hooks/
│   │   └── useBooking.js     ← Estado y lógica del formulario
│   ├── utils/
│   │   └── booking.js        ← Disponibilidad, horarios, mensajes
│   ├── styles/
│   │   └── global.css        ← Variables y estilos globales
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## ⚙️ Personalización

### Datos de contacto → `src/utils/booking.js`
```js
export const PHOTOGRAPHER_WA   = '5493812345678'        // número WhatsApp
export const PHOTOGRAPHER_MAIL = 'hola@laurablanco.com.ar'
```

### Fechas bloqueadas → `src/utils/booking.js`
```js
const BLOCKED = ['2025-08-01', '2025-08-08']   // días sin disponibilidad
const TAKEN   = { '2025-08-10': ['09:00'] }    // horarios ocupados por día
```

### Nombre/datos en Navbar y Footer → editar directamente en los .jsx

### Imágenes → reemplazar URLs de Unsplash por tus fotos reales

---

## 🎨 Diseño

| Elemento   | Valor |
|------------|-------|
| Fondo base | Crema `#faf6f0` |
| Acento     | Terracota `#c47b5a` |
| Secundario | Verde salvia `#7a9478` |
| Fuente display | Playfair Display (serif/itálica) |
| Fuente cuerpo  | Lato (sans-serif ligera) |

---

## ✅ Funcionalidades

- Navbar fija con scroll spy y menú hamburguesa mobile
- Hero con collage orgánico de fotos y formas redondeadas
- Galería editorial con grid asimétrico de 8 fotos
- Cards de servicios (Familia, Newborn, Embarazo, Infantil)
- Formulario de reserva con verificación de disponibilidad en tiempo real
- Selección de horarios disponibles por día
- Envío por WhatsApp (mensaje pre-armado) o por Email
- Sección de contacto con foto, cita y métodos directos
- Totalmente responsive (mobile / tablet / desktop)
