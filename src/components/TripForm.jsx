import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { TripsContext } from '../contexts/TripsContext.jsx'

export default function TripForm({ mode = 'add' }){
  const { trips, addTrip, updateTrip } = useContext(TripsContext)
  const { register, handleSubmit, setValue, formState: { errors } } = useForm()
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    if(mode === 'edit' && params.id){
      const t = trips.find(x => String(x.id) === String(params.id))
      if(t){
        setValue('destination', t.destination)
        setValue('startDate', t.startDate)
        setValue('endDate', t.endDate)
        setValue('price', t.price)
        setValue('status', t.status)
      }
    }
  }, [mode, params, setValue, trips])

  const onSubmit = data => {
    if(new Date(data.startDate) > new Date(data.endDate)){
      alert('Start date must be before end date')
      return
    }
    if(mode === 'add'){
      addTrip({ ...data, id: Date.now() })
    } else {
      updateTrip(Number(params.id), data)
    }
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md">
      <div>
        <label className="block mb-1">Destination</label>
        <input {...register('destination', { required: true })} className="border p-2 w-full" />
        {errors.destination && <p className="text-red-500">Destination required</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-1">Start Date</label>
          <input type="date" {...register('startDate', { required: true })} className="border p-2 w-full" />
        </div>
        <div>
          <label className="block mb-1">End Date</label>
          <input type="date" {...register('endDate', { required: true })} className="border p-2 w-full" />
        </div>
      </div>

      <div>
        <label className="block mb-1">Price</label>
        <input type="number" {...register('price', { required: true, min: 1 })} className="border p-2 w-full" />
      </div>

      <div>
        <label className="block mb-1">Status</label>
        <select {...register('status', { required: true })} className="border p-2 w-full">
          <option value="PLANNED">PLANNED</option>
          <option value="ONGOING">ONGOING</option>
          <option value="COMPLETED">COMPLETED</option>
        </select>
      </div>

      <div className="flex gap-2">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
        <button type="button" onClick={() => navigate('/')} className="px-4 py-2 border rounded">Cancel</button>
      </div>
    </form>
  )
}
