import React from 'react'
import styled from 'styled-components'
import TopBar from '../Components/TopBar/TopBar'
import Odom from '../Components/Odom/Odom'

const Container = styled.div`
    height: 75vh;
    width: auto;
    align-items: center;
    justify-content: center;
    background-color: azure;
    padding: 16px 20px;

    /* Gian's Code */
    max-width: 700px;
    margin: 0 auto;
    padding: 0px;
    overflow: auto;
`

export default function AddOdom() {

  return (
    <>
        <TopBar headerTitle="Trip Details" back={true} exit={true} />
        <Container>
            <Odom />
        </Container>
    </>
  )
}