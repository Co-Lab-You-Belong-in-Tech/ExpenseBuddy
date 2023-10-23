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

const OptionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 2.5%;
    padding-bottom: 2.5%;
    width: 100%;
`

const Subtext = styled.span`
    

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
            <TitleText>Add</TitleText>
        </TitleWrapper>
        <Horiz></Horiz>
        <OptionWrapper>
            <Subtext>Add Trip</Subtext>
            <ChevronRightIco />
        </OptionWrapper>
        <Horiz></Horiz>
        <OptionWrapper>
            <Subtext>Add Expense</Subtext>
            <ChevronRightIco />
        </OptionWrapper>

    </Container>
  )
}

export default AddPopUp
