import styled from 'styled-components'
import TopBar from '../Components/TopBar/TopBar'

const Container = styled.div`
    width: auto;
    height: 75vh;
    align-items: center;
    justify-content: center;
    background-color: azure;
    padding: 16px 20px;
`

export default function AllTrips() {

  return (
    <>
      <TopBar headerTitle="Emily's Trips" />
      <Container>
          <h2>All Trips Page</h2>
      </Container>
    </>
  )
}