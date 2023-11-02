import React from 'react'
import styled from 'styled-components'
import useMultiStepForm from '../Hooks/useMultiStepForm'
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
    padding: 0px;
    overflow: auto;
`

export default function AddOdom() {

    const { steps, currentStepIndex } = useMultiStepForm(<Odom />)

  return (
    <>
        <TopBar headerTitle="Trip Details" back={true} exit={true} />
        <Container>
            { steps }
        </Container>
    </>
  )
}
