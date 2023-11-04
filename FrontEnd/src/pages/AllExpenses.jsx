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

export default function AllExpenses() {
  return (
    <>
      <TopBar headerTitle="Emily's Expenses" />
      <Container>
          <h2>All Expenses Page</h2>
          <h3>This content will be coming soon.</h3>
      </Container>
    </>
  )
}