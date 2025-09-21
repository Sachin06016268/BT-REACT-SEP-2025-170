import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Dashboard from './pages/Dashboard.jsx'
import AddTrip from './pages/AddTrip.jsx'
import EditTrip from './pages/EditTrip.jsx'
import { TripsProvider } from './contexts/TripsContext.jsx'

export default function App(){
  return (
    <TripsProvider>
      <div className="min-h-screen">
        <Navbar />
        <main className="p-6 max-w-6xl mx-auto">
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/add' element={<AddTrip />} />
            <Route path='/edit/:id' element={<EditTrip />} />
          </Routes>
        </main>
      </div>
    </TripsProvider>
  )
}
