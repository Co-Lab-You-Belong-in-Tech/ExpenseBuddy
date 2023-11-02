import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import TripsIco from '../Icons/TripsIco'
import OdometerIco from '../Icons/OdometerIco'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 2.5%;
    margin-right: 2.5%;
    padding-bottom: 2.5%;

`
const TitleWrapper = styled.div`
    display: flex;
`
const TitleText = styled.div`
    text-align: center;
    padding-bottom: 20px;
    font-size: larger;
    font-weight: 500;

`

const TileWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-top: 2.5%;
    width: 100%;

`
const TileBackground = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #F3F6FF;
    padding-top: 2.5%;
    padding-bottom: 2.5%;
    width: 100%;
    border-radius: 10px;
    
    &:focus-within {
        background-color: #def7f4;
        border-width: 2px;
        border: #009479;
        border-style: solid;
        border-width: 2px;
    }
`
const TileIcon = styled.div`
    margin: auto;
    padding: 15px;
`
const TileTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const TileTitle = styled.div`
    font-size: medium;
    font-weight: 500;

`
const TileText = styled.div`
    font-size: medium;
    font-weight: 300;

`

const Horiz = styled.div`
    height: 1px;
    background-color: lightgray;
    width: 120%;
`
const RadioOption = styled.input`
    transform: scale(1.6);
`
const NextButton = styled.button`
    background: #009479;
    color: white;
    display: flex;
    padding-top: 2.5%;
    padding-bottom: 2.5%;
    border: none;
    border-radius: 10px;
    width: 100%;
    justify-content: center;
    margin-top: 2.5%;
    font-size: medium;
    font-family: 'Lexend', sans-serif;

`


const AddPopUp = () => {
  return (
    <Container>
        <TitleWrapper>
            <TitleText>How do you prefer to track your mileage?</TitleText>
        </TitleWrapper>
        <Horiz></Horiz>
        <TileWrapper>
            <TileBackground>
                <TileIcon>
                    <TripsIco />
                </TileIcon>
                <TileTextWrapper>
                    <TileTitle>Location</TileTitle>
                    <TileText><label for="location">Select this option to record location data for this trip</label></TileText>
                </TileTextWrapper>
                <TileIcon>
                    <RadioOption type='radio' name='addvia' id="location" value="location" />
                </TileIcon>
            </TileBackground>
        </TileWrapper>

        <TileWrapper>
            <TileBackground>
                <TileIcon>
                    <OdometerIco />
                </TileIcon>
                <TileTextWrapper>
                    <TileTitle>Odometer</TileTitle>
                    <TileText>Select this option to record odometer reading for this trip</TileText>
                </TileTextWrapper>
                <TileIcon>
                    <RadioOption type='radio' name='addvia' id="odometer" value="odometer" />
                </TileIcon>
            </TileBackground>
        </TileWrapper>

        <NextButton name='addvia'>Next</NextButton>


    </Container>
  )
}

export default AddPopUp
