import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    width: auto;
    height: 75vh;
    align-items: center;
    justify-content: center;
    background-color: azure;
    padding: 16px 20px;
`
const Wrapper = styled.div`

`

const Dashboard = () => {
  return (
    <Container>
      Welcome
    </Container>
  )
}

export default Dashboard
