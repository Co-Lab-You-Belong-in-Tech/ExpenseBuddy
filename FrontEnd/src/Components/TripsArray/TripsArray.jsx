import React, { useState, useEffect } from 'react'
import ViewTripCard from '../ViewTripCard'

const base_api_url = import.meta.env.VITE_APP_BASE_API
const gian = import.meta.env.VITE_APP_GIAN

export default function TripsArray({typeFilter, dateFilter}) {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
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
      setTrips(await res.json());
      setLoading(false);
    })()
  }, [])

  return (
    <>
      {
        loading ?
          <p>Loading...</p> :
          trips.filter((trip) => {
            let isValid = false;
            
            if (!typeFilter || typeFilter === "All Trips") isValid = true;
            else isValid = trip?.expense_type?.toLowerCase() === typeFilter?.toLowerCase();

            if (!dateFilter) isValid = true;
            else isValid = trip?.expense_date?.startsWith(`${dateFilter.year}-${dateFilter.month}`);
            
            return isValid;
          }).map((tripData, index) => <ViewTripCard key={index} {...tripData} />)
      }
    </>
  )
}