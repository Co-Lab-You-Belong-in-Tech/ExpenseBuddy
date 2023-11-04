import React from 'react'
import styled from 'styled-components'
import TopBar from '../Components/TopBar/TopBar'
import MonthYearPicker from '../Components/MonthYearPicker'
import FilterableList from '../Components/FilterTripButtons'
import TripsArray from '../Components/TripsArray/TripsArray'

const Container = styled.div`
    width: auto;
    height: 75vh;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding: 3%;
`
const MonthYearWrapper = styled.div`
  padding: 10px;
`

export default function ViewAllTrips() {
  return (
    <>
    <TopBar headerTitle="Trips" back="True"/>
    <Container>
        <MonthYearWrapper>
          <MonthYearPicker />
        </MonthYearWrapper>
        <FilterableList />
        <TripsArray />
    </Container>
    </>
  )
}

