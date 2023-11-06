import React from 'react'
import styled from "styled-components";
import successimg from '../Images/successimg.svg'
import TopBar from '../Components/TopBar/TopBar';
import { useNavigate } from 'react-router';

const Container = styled.div`
    width: auto;
    height: 75vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: white;
    padding: 16px 20px;
    overflow: auto;
`
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 10%;
  width: 80%;
`
const ImageContainer = styled.img`
  width: 100%;
  max-height: 30vh;
  display: flex;
`
const TextBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const TextHeading = styled.div`
  display: flex;
  font-size: x-large;
  justify-content: center;
`
const TextDesc = styled.div`
  display: flex;
  font-size: medium;
  justify-content: center;
  padding-top: 5px;
  
`
const ViewAllTripsButton = styled.button`
  display: flex;
  color: #009479;
  border-width: 2px;
  border-radius: 10px;
  padding: 10px;
  font-family: 'Lexend', sans-serif;
  border-color: #009479;
  background-color: white;
  width: 100%;
  max-width: 1024px;
  margin-top: 20px;
  justify-content: center;
  
`

export default function TripSuccess() {
  const navigate = useNavigate()

  function nav() {
    navigate("/trips")
  }

  return (
    <>
    <TopBar exit="True" />
    <Container>
      <ImageWrapper>
        <ImageContainer src={successimg} />
      </ImageWrapper>
      
      <TextBlockWrapper>
        <TextHeading>Success!</TextHeading>
        <TextDesc>Your trip has been logged.</TextDesc>
        <ViewAllTripsButton onClick={nav}>View All Trips</ViewAllTripsButton>
      </TextBlockWrapper>
      
    </Container>
    </>
  )
}


