import React from 'react'
import styled from "styled-components";
import successimg from '../Images/successimg.png'
import TopBar from '../Components/TopBar/TopBar';

const Container = styled.div`
    width: auto;
    height: 75vh;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding: 3%;
`
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 10%;
  width: 80%;
`
const ImageContainer = styled.img`
  width: 100%;
  display: flex;
  justify-content: center;
  
`
const TextBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
const ViewAllTrips = styled.button`
  display: flex;
  color: #009479;
  border-width: 2px;
  border-radius: 10px;
  padding: 10px;
  font-family: 'Lexend', sans-serif;
  border-color: #009479;
  background-color: white;
  width: 100%;
  margin-top: 20px;
  justify-content: center;
  
`

export default function TripSuccess() {
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
      </TextBlockWrapper>
      <ViewAllTrips> View All Trips</ViewAllTrips>
    </Container>
    </>
  )
}


