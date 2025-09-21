import React from 'react'
import TripForm from '../components/TripForm.jsx'

export default function AddTrip(){
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Add New Trip</h2>
      <TripForm mode="add" />
    </div>
  )
}
