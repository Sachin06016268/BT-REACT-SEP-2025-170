import React from 'react'
import { Link } from 'react-router-dom'

export default function TripList({ trips, onDelete }){
  if(!trips || trips.length === 0) return <p>No trips found.</p>

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left p-3">Destination</th>
            <th className="text-left p-3">Start Date</th>
            <th className="text-left p-3">End Date</th>
            <th className="text-left p-3">Price</th>
            <th className="text-left p-3">Status</th>
            <th className="text-left p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {trips.map(t => (
            <tr key={t.id} className="border-t">
              <td className="p-3">{t.destination}</td>
              <td className="p-3">{t.startDate}</td>
              <td className="p-3">{t.endDate}</td>
              <td className="p-3">₹{t.price}</td>
              <td className="p-3">{t.status}</td>
              <td className="p-3 space-x-2">
                <Link to={`/edit/${t.id}`} className="text-blue-600 hover:underline">Edit</Link>
                <button onClick={() => { if(confirm('Delete this trip?')) onDelete(t.id) }} className="text-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
