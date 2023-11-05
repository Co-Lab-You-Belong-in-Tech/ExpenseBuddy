import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import TopBar from "../Components/TopBar/TopBar"
import { Link } from 'react-router-dom'
import dashboard from '../Images/dashboard.svg'
import MonthYearPicker from '../Components/MonthYearPicker'
import ChevronRightIco from '../Icons/ChevronRightIco'
import TripsIco from '../Icons/TripsIco'

const base_api_url = import.meta.env.VITE_APP_BASE_API
const gian = import.meta.env.VITE_APP_GIAN

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
const SummaryWrapper = styled.div`
  padding: 2%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Tile = styled.div`
  width: 29%;
  display: flex;
  flex-direction: column;
  background-color: #F3F6FF;
  border-radius: 16px;
`
const TileText = styled.div`
  align-items: center;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  color: #2D3648;
  font-size: x-large;
`
const TileDesc = styled.div`
  color: #2D3648;
  font-size: small;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
`
const ImageCardWrapper = styled.div`
  width: 96%;
  justify-content: center;
  align-items: center;
  padding: 10px;
  display: flex;
  flex-direction: column;
`
const DashImage = styled.img`
  width: 100%;
  padding-bottom: 10px;
`
const CardWrapper = styled.div`
  width: 90%;
  background-color: #F3F6FF;
  display: flex;
  flex-direction: row;
  padding: 20px;
  border-radius: 16px;
  justify-content: space-around;
  margin: 2%;
`
const ArrowWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`
const TextBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`
const IconTripWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`
const IconWrapper = styled.div`
  padding: 5px;
`
const ManageWrapper = styled.div`
  padding: 5px;
  font-size: large;
  
`
const TextDesc = styled.div`
  font-size: medium;
  font-weight: 300;
`
const LearnMore = styled.div`
  padding-top: 10px;
  color: #009479;
  text-decoration: underline;
`

const Dashboard = () => {

  const [ trips, setTrips ] = useState([])
  const [ dateFilter, setDateFilter ] = useState(
    { 
      month: (new Date()).getMonth(), 
      year: (new Date()).getFullYear()
    }
  )
  const [ loading, setLoading ] = useState(false)

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
      setTrips(await res.json())
      setLoading(false)
      console.log(trips)
    })()
  }, [])

  return (
    <>
      <TopBar headerTitle="Welcome, Emily" />
      <Container>
        <MonthYearWrapper>
          <MonthYearPicker setDateFilter={setDateFilter}/>
        </MonthYearWrapper>
        <SummaryWrapper>
          <Tile>
            <TileText>
            {
                loading ?
                <span>Loading</span> :
                trips.filter((trip) => {
                  let isValid = true;
                  if (!trip?.expense_date?.startsWith(`${dateFilter.year}-${dateFilter.month}`))
                  isValid = false;
                  return isValid;
                }).reduce((total, trip) => parseInt(trip.expense_mileage) + total,0)
              }
            </TileText>
            <TileDesc>Miles Driven</TileDesc>
          </Tile>
          <Tile>
            <TileText>
              {
                loading ?
                <span>Loading</span> :
                trips.filter((trip) => {
                  let isValid = true;
                  if (!trip?.expense_date?.startsWith(`${dateFilter.year}-${dateFilter.month}`))
                  isValid = false;
                  return isValid;
                }).length
              }
            </TileText>
            <TileDesc>Total Trips</TileDesc>
          </Tile>
          <Tile>
            <TileText>$ 
            {
                loading ?
                <span>Loading</span> :
                trips.filter((trip) => {
                  let isValid = true;
                  if (!trip?.expense_date?.startsWith(`${dateFilter.year}-${dateFilter.month}`))
                  isValid = false;
                  return isValid;
                }).reduce((total, trip) => parseInt(trip.expense_dollar_amt) + total,0)
              }
            </TileText>
            <TileDesc>Logged</TileDesc>
          </Tile>
        </SummaryWrapper>
        <ImageCardWrapper>
          <DashImage src={dashboard}/>

          <CardWrapper>
            <TextBlockWrapper>
              <IconTripWrapper>
                <IconWrapper>
                  <TripsIco />
                </IconWrapper>
                <ManageWrapper>
                  Manage trips
                </ManageWrapper>
              </IconTripWrapper>
              <TextDesc>
                At tax time, you can claim a standard mileage rate for every mile driven
              </TextDesc>
              <LearnMore>
                Learn More
              </LearnMore>
            </TextBlockWrapper>
            <ArrowWrapper >
              <Link to="/trips">
                <ChevronRightIco />
              </Link>
            </ArrowWrapper>
          </CardWrapper>

          {/* <CardWrapper>
            <TextBlockWrapper>
              <IconTripWrapper>
                <IconWrapper>
                  <TripsIco />
                </IconWrapper>
                <ManageWrapper>
                  Manage expenses
                </ManageWrapper>
              </IconTripWrapper>
              <TextDesc>
                Keep track of expenses, such as parking, tolls, and registration fees
              </TextDesc>
              <LearnMore>
                Learn More
              </LearnMore>
            </TextBlockWrapper>
            <ArrowWrapper>
              <ChevronRightIco />
            </ArrowWrapper>
          </CardWrapper> */}

        </ImageCardWrapper>

      </Container>
    </>

  )
}

export default Dashboard

