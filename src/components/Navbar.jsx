import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <nav className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">Trip Manager</div>
        <div className="flex items-center space-x-3">
          <Link to="/" className="text-gray-700 hover:underline">Dashboard</Link>
          <Link to="/add" className="bg-blue-600 text-white px-3 py-1 rounded">Add Trip</Link>
        </div>
      </div>
    </nav>
  )
}
