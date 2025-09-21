import React from 'react'

export default function Pagination({ page, totalPages, setPage }){
  if(totalPages <= 1) return null
  return (
    <div className="flex items-center justify-between mt-4">
      <button onClick={() => setPage(p => Math.max(1, p-1))} disabled={page===1} className="px-3 py-1 bg-gray-200 rounded">Prev</button>
      <div>Page {page} of {totalPages}</div>
      <button onClick={() => setPage(p => Math.min(totalPages, p+1))} disabled={page===totalPages} className="px-3 py-1 bg-gray-200 rounded">Next</button>
    </div>
  )
}
