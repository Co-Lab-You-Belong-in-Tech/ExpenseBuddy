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
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
`
const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
`

export default function TopBar({ headerTitle, back=false, exit=false, setting=false }) {
  const navigate = useNavigate()
  const handleClick = () => navigate(-1)

  return (
    <Container>
      <Wrapper>
        <LeftContainer>
          { back ? <BackIco onClick={handleClick} /> : '' }
          <h3>{ headerTitle }</h3>
        </LeftContainer>
        
        <RightContainer>
          { exit ? <Link to="/"><ExitIco /></Link> : '' }
          { setting ? <span>Settings</span> : '' }
        </RightContainer>
      </Wrapper>
    </Container>
  )
}

