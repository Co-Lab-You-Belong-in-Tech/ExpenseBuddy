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

export default function Reports() {
  return (
    <>
      <TopBar headerTitle="Emily's Reports" />
      <Container>
          <h2>Reports Page</h2>
      </Container>
    </>
  )
}