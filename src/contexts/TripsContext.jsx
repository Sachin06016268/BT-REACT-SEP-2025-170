import React, { createContext, useState, useEffect } from 'react'
import initialTrips from '../data/trips.js'

export const TripsContext = createContext()

export function TripsProvider({ children }) {
  const [trips, setTrips] = useState(() => {
    try {
      const v = localStorage.getItem('trips')
      return v ? JSON.parse(v) : initialTrips
    } catch(e){ return initialTrips }
  })

  useEffect(() => {
    localStorage.setItem('trips', JSON.stringify(trips))
  }, [trips])

  const addTrip = (trip) => setTrips(p => [...p, trip])
  const updateTrip = (id, updated) => setTrips(p => p.map(t => t.id === id ? { ...t, ...updated } : t))
  const deleteTrip = (id) => setTrips(p => p.filter(t => t.id !== id))

  return (
    <TripsContext.Provider value={{ trips, addTrip, updateTrip, deleteTrip }}>
      {children}
    </TripsContext.Provider>
  )
}
