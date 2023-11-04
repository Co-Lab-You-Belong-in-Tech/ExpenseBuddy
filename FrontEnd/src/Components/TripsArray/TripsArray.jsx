import React, { useState, useEffect } from 'react'
import ViewTripCard from '../ViewTripCard'

const base_api_url = import.meta.env.VITE_APP_BASE_API
const gian = import.meta.env.VITE_APP_GIAN

export default function TripsArray() {

    const [ trips, setTrips ] = useState([])
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        (async () => {
            setLoading(true)
            const res = await fetch(`${base_api_url}/expense`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${gian}`
                }
            })
            if (!res.ok) {
                throw new Error("Failed to fetch")
            }
            const data = await res.json()
            const tripArr  = await data
            const arr = []
            console.log(tripArr)
            for (let k of tripArr) {
                arr.push(k)
            }
            setTrips(arr)
            setLoading(false)
            console.log(trips)
        })()
    }, [])

  return (
    <>
        {
            loading ? 
            (<p>Loading...</p>) :
            (trips.map((option, index) => (
                <ViewTripCard
                     key={index}
                     option={option}
                />
            )))
        }
    </>
  )
}