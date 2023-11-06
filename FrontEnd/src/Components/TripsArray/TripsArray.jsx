import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import ViewTripCard from '../ViewTripCard'

const base_api_url = import.meta.env.VITE_APP_BASE_API
const gian = import.meta.env.VITE_APP_GIAN

const TripCardContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
`

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
      <TripCardContainer>
      {
        loading ?
          <p>Loading...</p> :
          trips.filter((trip) => {
            let isValid = true;
            
            if (
              (!trip?.expense_date?.startsWith(`${dateFilter.year}-${dateFilter.month}`)) 
            || 
            (typeFilter !== "All Trips" && typeFilter.toLowerCase() !== trip?.expense_type?.toLowerCase())
            )

            isValid = false;
            return isValid;
          }).map((tripData, index) => <ViewTripCard key={index} {...tripData} />)
      }
      </TripCardContainer>
    </>
  )
}