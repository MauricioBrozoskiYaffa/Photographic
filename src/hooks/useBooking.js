import { useState, useCallback } from 'react'
import { checkDate, getSlots, buildWAMsg, buildMailBody, PHOTOGRAPHER_WA, PHOTOGRAPHER_MAIL } from '../utils/booking'

const EMPTY = { name: '', email: '', phone: '', type: '', date: '', time: '', notes: '' }

export function useBooking() {
  const [form, setForm]           = useState(EMPTY)
  const [slots, setSlots]         = useState([])
  const [dateState, setDateState] = useState(null)
  const [errors, setErrors]       = useState({})
  const [done, setDone]           = useState(false)

  const set = useCallback((k, v) => {
    setForm(p => ({ ...p, [k]: v }))
    setErrors(p => ({ ...p, [k]: '' }))

    if (k === 'date' && v) {
      const status = checkDate(v)
      setDateState(status)
      if (status === 'available') {
        setSlots(getSlots(v))
      } else {
        setSlots([])
      }
      setForm(p => ({ ...p, date: v, time: '' }))
    }
  }, [])

  const validate = useCallback(() => {
    const e = {}
    if (!form.name.trim())  e.name  = 'Ingresá tu nombre'
    if (!form.email.trim()) e.email = 'Ingresá tu email'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Email inválido'
    if (!form.type)  e.type  = 'Elegí el tipo de sesión'
    if (!form.date)  e.date  = 'Elegí una fecha'
    if (!form.time)  e.time  = 'Elegí un horario'
    if (dateState && dateState !== 'available') e.date = 'Fecha no disponible'
    setErrors(e)
    return Object.keys(e).length === 0
  }, [form, dateState])

  const sendWA = useCallback(() => {
    if (!validate()) return
    window.open(`https://wa.me/${PHOTOGRAPHER_WA}?text=${buildWAMsg(form)}`, '_blank')
    setDone(true)
  }, [form, validate])

  const sendMail = useCallback(() => {
    if (!validate()) return
    const subj = encodeURIComponent(`Consulta de sesión - ${form.type} - ${form.date}`)
    window.open(`mailto:${PHOTOGRAPHER_MAIL}?subject=${subj}&body=${buildMailBody(form)}`, '_blank')
    setDone(true)
  }, [form, validate])

  const reset = useCallback(() => {
    setForm(EMPTY); setSlots([]); setDateState(null); setErrors({}); setDone(false)
  }, [])

  return { form, slots, dateState, errors, done, set, sendWA, sendMail, reset }
}
