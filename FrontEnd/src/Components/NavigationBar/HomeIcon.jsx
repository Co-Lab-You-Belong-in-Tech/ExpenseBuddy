import HomeIco from '../../Icons/HomeIco.jsx'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  height: 5vh;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
  color: #2D3648;
  cursor: pointer;
  font-size: 0.7rem;
  text-decoration: none;
  opacity: 0.5;
`
export default function HomeIcon() {
  return (
    <Container>
        <HomeIco />
        <span>Home</span>
    </Container>
  )
}