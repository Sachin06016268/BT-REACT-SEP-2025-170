import React, { useContext, useState, useMemo } from 'react'
import { TripsContext } from '../contexts/TripsContext.jsx'
import TripList from '../components/TripList.jsx'
import Pagination from '../components/Pagination.jsx'

export default function Dashboard(){
  const { trips, deleteTrip } = useContext(TripsContext)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('ALL')
  const [sortBy, setSortBy] = useState('')
  const [page, setPage] = useState(1)
  const perPage = 5

  const filtered = useMemo(() => {
    let data = trips || []
    if(search) data = data.filter(t => t.destination.toLowerCase().includes(search.toLowerCase()))
    if(statusFilter !== 'ALL') data = data.filter(t => t.status === statusFilter)
    if(sortBy === 'price') data = [...data].sort((a,b) => a.price - b.price)
    else if(sortBy === 'startDate') data = [...data].sort((a,b) => new Date(a.startDate) - new Date(b.startDate))
    return data
  }, [trips, search, statusFilter, sortBy])

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage))
  const start = (page - 1) * perPage
  const current = filtered.slice(start, start + perPage)

  return (
    <div>
      <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:gap-4">
        <input value={search} onChange={e => { setSearch(e.target.value); setPage(1) }} placeholder="Search destination..." className="border p-2 rounded w-full sm:w-1/3" />
        <select value={statusFilter} onChange={e => { setStatusFilter(e.target.value); setPage(1) }} className="border p-2 rounded">
          <option value="ALL">All</option>
          <option value="PLANNED">PLANNED</option>
          <option value="ONGOING">ONGOING</option>
          <option value="COMPLETED">COMPLETED</option>
        </select>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="border p-2 rounded">
          <option value="">No Sort</option>
          <option value="price">Price</option>
          <option value="startDate">Start Date</option>
        </select>
      </div>

      <TripList trips={current} onDelete={deleteTrip} />

      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </div>
  )
}
