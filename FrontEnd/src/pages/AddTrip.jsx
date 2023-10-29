import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

import AddStartLoc from '../Components/AddStartLoc/AddStartLoc'
import TopBar from '../Components/TopBar/TopBar'
import useMultiStepForm from '../Hooks/useMultiStepForm'

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
export default function AddTrip() {

    const { steps, currentStepIndex } = useMultiStepForm(<AddStartLoc />)

    return (
        <>
            <TopBar headerTitle="Enter start location" back={true} exit={true} />
            <Container>
                { steps }
            </Container>
        </>
    )
}