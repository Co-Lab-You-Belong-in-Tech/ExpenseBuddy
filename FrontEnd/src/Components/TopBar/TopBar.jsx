import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components";
import { mobile } from "../../responsive";
import BackIco from "../../Icons/BackIco"
import ExitIco from "../../Icons/ExitIco"

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

export default function TopBar({ headerTitle, back=false, exit=false, setting=false }) {
  const navigate = useNavigate()
  const handleClick = () => navigate(-1)

  return (
    <Container>
      <Wrapper>
        { back ? <BackIco onClick={handleClick} /> : '' }
        <h3>{ headerTitle }</h3>
        { exit ? <Link to="/"><ExitIco /></Link> : '' }
        { setting ? <span>Settings</span> : '' }
      </Wrapper>
    </Container>
  )
}

