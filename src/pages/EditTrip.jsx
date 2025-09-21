import React from 'react'
import TripForm from '../components/TripForm.jsx'

export default function EditTrip(){
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Edit Trip</h2>
      <TripForm mode="edit" />
    </div>
  )
}
