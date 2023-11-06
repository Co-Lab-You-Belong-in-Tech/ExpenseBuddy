import React, { useState } from 'react'
import styled from 'styled-components'
import TopBar from '../Components/TopBar/TopBar'
import MonthYearPicker from '../Components/MonthYearPicker'
import FilterableList from '../Components/FilterTripButtons'
import TripsArray from '../Components/TripsArray/TripsArray'
import ViewTripCard from '../Components/ViewTripCard'

const Container = styled.div`
    width: auto;
    height: 75vh;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding: 16px 20px;
    overflow: auto;
`
const MonthYearWrapper = styled.div`
  padding: 10px;
`

export default function ViewAllTrips() {
  const [typeFilter, setTypeFilter] = useState("All Trips");
  const [dateFilter, setDateFilter] = useState(
    { 
      month: (new Date()).getMonth(), 
      year: (new Date()).getFullYear()
    }
  );
  return (
    <>
    <TopBar headerTitle="All Trips" back={true} exit={true} />
    <Container>
        <MonthYearWrapper>
          <MonthYearPicker setDateFilter={setDateFilter} />
        </MonthYearWrapper>
        <FilterableList setFilter={setTypeFilter} />
        <TripsArray typeFilter={typeFilter}  dateFilter={dateFilter} />
    </Container>
    </>
  )
}

