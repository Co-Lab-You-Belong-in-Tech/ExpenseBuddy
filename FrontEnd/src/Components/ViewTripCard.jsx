import styled from "styled-components";
import CarProfile from '../Icons/CarProfile.svg'
import NotesPic from '../Icons/Notepad.svg'

const Container = styled.div`
    
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: solid;
    border-color: #E1E6EF;
    border-radius: 8px;
    padding: 10px;
    padding-left: 0px;

`
const DateTagWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 10px;
    
`
const Date = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 3px;
    font-size: x-small;
    
`
const Tag = styled.div`
    display: flex;
    background-color: #027BCE;
    color: white;
    border-radius: 5px;
    padding: 3px;
    font-size: x-small;
    font-weight: 400;
    justify-content: space-between;
    
`
export const CalcContainer = styled.div`
    display: flex;
    width: 350px;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
`

export const FigureContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const FigureTitle = styled.span`
    color: var(--Text, #2D3648);
    font-size: small;
    font-style: normal;
    font-weight: 400;
    padding-right: 20px;
    line-height: 24px; /* 171.429% */
    display: flex;
    justify-content: center;

`

export const FigureValue = styled.span`
    color: var(--Text, #2D3648);
    font-size: x-large;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 100% */
    padding-left: 3px;
    padding-right: 3px;
    display: flex;
    justify-content: center;
    align-content: center;
`

export const FigureFix = styled.span`
    color: var(--Text, #2D3648);
    font-size: large;
    font-style: normal;
    font-weight: 300;
    line-height: 24px;
    padding-left: 3px;
    padding-right: 3px;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const FigureFixMile = styled.span`
    color: var(--Text, #2D3648);
    font-size: large;
    font-style: normal;
    font-weight: 300;
    line-height: 24px;
    padding-top: 2px;
    padding-left: 3px;
    padding-right: 3px;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const LineTemplate = styled.hr`
    width: 50%;
    border: solid;
    color: #E1E6EF;
    border-width: 2px;
    justify-content: center;
    align-items: center;
`

const Horiz = styled.hr`
    color: #E1E6EF;
    border: solid;
    width: 103%;
    display: flex;
    border-width: 1px;

`
const BlockWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
const IconWrapper = styled.img`
    padding: 5px;
    padding-left: 10px;
    width: 18px;
    display: flex;

`
const TripID = styled.div`
    font-size: smaller;
    display: flex;
`
const Notes = styled.span`
    font-size: smaller;
    display: flex;
    font-weight: 300;
    
`



const ViewTripCard = () => {
    return(
        <Container>
            <Wrapper>
                <DateTagWrapper>
                    <Date>expense_date</Date>
                    <Tag>expense_type</Tag>
                </DateTagWrapper>

                <Horiz />
            
            <CalcContainer>
            <FigureContainer>
                <FigureTitle>Distance</FigureTitle>
                <FigureValue>12<FigureFixMile>mi</FigureFixMile></FigureValue>
            </FigureContainer>
            <LineTemplate />
                <FigureContainer>
                    <FigureTitle>Amount</FigureTitle>
                    <FigureValue><FigureFix>$</FigureFix>3</FigureValue>
                </FigureContainer>
            </CalcContainer>

        <Horiz />
        <BlockWrapper>
            <IconWrapper src={CarProfile} /><TripID>Trip ID #</TripID>
        </BlockWrapper>
        <BlockWrapper>
            <IconWrapper src={NotesPic} /><Notes>Notes go here</Notes>
        </BlockWrapper>
        </Wrapper>

        </Container>

    )
}

export default ViewTripCard