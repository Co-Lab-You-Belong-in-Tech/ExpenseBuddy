import React from 'react'
import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
    width: auto;
    height: 10vh;
    display: flex;
    color: #fff;
    background-color: #027BCE;
    align-items: center;
`
const Wrapper = styled.div`
    display: flex;
    padding: 16px;
    align-items: center;
    justify-content: space-between;
`

export default function Greeting() {
  return (
    <Container>
      <Wrapper>
        <h3>Welcome, Emily!</h3>
      </Wrapper>
    </Container>
  )
}

