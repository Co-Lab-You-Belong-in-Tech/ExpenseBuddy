import AddIco from '../../Icons/AddIco'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  height: 4vh;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
  font-size: 0.7rem;
  text-decoration: none;
`
const Wrapper = styled.div`
  display: flex;
  padding: 1.5vh;
  justify-content: center;
  align-items: center;
  border-radius: 230.88px;
  background: var(--Light-Green, #009479);
  opacity: 1;
  cursor: pointer;
`

export default function AddIcon() {
  return (
      <Container >
        <Wrapper>
          <AddIco/>
        </Wrapper>
      </Container>
  )
}
