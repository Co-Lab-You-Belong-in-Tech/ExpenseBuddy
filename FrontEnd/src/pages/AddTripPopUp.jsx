import React from 'react'
import styled from 'styled-components'
import ChevronRightIco from '../Icons/ChevronRightIco'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 5%;
    margin-right: 5%;

`
const TitleWrapper = styled.div`
    display: flex;
`
const TitleText = styled.span`
    text-align: center;
    padding-bottom: 20px;

`

const TileWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 2.5%;
    padding-bottom: 2.5%;
    width: 100%;
`
const TileBackground = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 2.5%;
    padding-bottom: 2.5%;
    width: 100%;
`
const TileTitle = styled.span`
    

`
const TileText = styled.span`
    

`

const Horiz = styled.div`
    height: 1px;
    background-color: lightgray;
    width: 120%;
`


const AddPopUp = () => {
  return (
    <Container>
        <TitleWrapper>
            <TitleText>How do you prefer to track your mileage</TitleText>
        </TitleWrapper>
        <Horiz></Horiz>


    </Container>
  )
}

export default AddPopUp
