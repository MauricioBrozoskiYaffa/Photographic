// ============================================
// UTILS — Disponibilidad y mensajes
// Laura Blanco Fotografía
// ============================================

export const PHOTOGRAPHER_WA  = '5493812345678'   // ← cambiar por número real
export const PHOTOGRAPHER_MAIL = 'hola@laurablanco.com.ar' // ← cambiar

// Fechas completamente bloqueadas (YYYY-MM-DD)
const BLOCKED = [
  '2025-08-01', '2025-08-08', '2025-08-25',
  '2025-09-12', '2025-09-21',
]

// Horarios ya ocupados por fecha
const TAKEN = {
  '2025-08-10': ['09:00', '10:00', '15:00'],
  '2025-08-16': ['10:00', '11:00', '16:00', '17:00'],
  '2025-09-06': ['09:00', '10:00', '11:00'],
}

const ALL_SLOTS = ['09:00','10:00','11:00','12:00','15:00','16:00','17:00','18:00']

export function checkDate(dateStr) {
  const today = new Date(); today.setHours(0,0,0,0)
  const d = new Date(dateStr + 'T00:00:00')
  if (d < today) return 'past'
  if (d.getDay() === 0) return 'sunday'
  if (BLOCKED.includes(dateStr)) return 'blocked'
  return 'available'
}

export function getSlots(dateStr) {
  const taken = TAKEN[dateStr] || []
  return ALL_SLOTS.filter(s => !taken.includes(s))
}

export function fmtDate(dateStr) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('es-AR', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  })
}

export const SESSION_TYPES = [
  { v: 'familia',    l: 'Sesión Familiar' },
  { v: 'bebe',       l: 'Bebé / Newborn' },
  { v: 'embarazo',   l: 'Embarazo & Maternidad' },
  { v: 'cumple',     l: 'Cumpleaños / Infantil' },
  { v: 'pareja',     l: 'Sesión de Pareja' },
  { v: 'comunion',   l: 'Primera Comunión' },
  { v: 'graduacion', l: 'Graduación' },
  { v: 'otro',       l: 'Otro' },
]

export function buildWAMsg({ name, type, date, time, notes }) {
  const d = fmtDate(date)
  return encodeURIComponent(
`Hola Laura! 🌸 Me gustaría reservar una sesión.

*Nombre:* ${name}
*Tipo de sesión:* ${type}
*Fecha:* ${d}
*Horario:* ${time} hs
${notes ? `*Notas:* ${notes}` : ''}

¡Muchas gracias!`
  )
}

export function buildMailBody({ name, type, date, time, notes }) {
  const d = fmtDate(date)
  return encodeURIComponent(
`Nombre: ${name}\nTipo de sesión: ${type}\nFecha: ${d}\nHorario: ${time} hs\n${notes ? `Notas: ${notes}` : ''}`
  )
}
