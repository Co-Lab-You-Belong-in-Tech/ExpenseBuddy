import styled from 'styled-components'
import SearchIco from "../../Icons/SearchIco.svg"

export const AddTripContent = styled.div`
    display: flex;
    width: 390px;
    height: 844px;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    background: #FFF;

    /* Gian's Code */
    height: auto;
`

export const Subtext = styled.div`
    width: 350px;
    display: flex;
    padding: 0px 20px;
    align-items: center;
    gap: 10px;
`

export const SubtextMessage = styled.p`
    color: #000;
    font-family: Lexend;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 28px; /* 200% */
`

export const LocationContent = styled.div`
    display: flex;
    padding: 0px 20px;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    align-self: stretch;

    /* Gian's Code */
    align-items: flex-start;
    gap: 16px;
`

export const StartLocationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
`

export const StartLocationLabel = styled.label`
    color: var(--wf-base-800, #2D3648);
    /* Form field label */
    font-family: Lexend;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const StartLocationForm = styled.input`
    font-family: Lexend;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    border-radius: 6px;
    border: 2px solid var(--Line-Gray, #E1E6EF);
    background: #FFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 350px;
    height: 48px;
    padding: 14px 16px 14px 36px;

    /* Gian's Code */
    width: 294px;
    height: 20px;
    background-image: url(${ SearchIco });
    background-position: 14px 15px; 
    background-repeat: no-repeat;
`

export const LocationTitle = styled.h2`
    display: flex;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    font-family: Lexend;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const LocationEmptyContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    align-self: stretch;
`

export const SavedLocationEmptyMessage = styled.p`
    align-self: stretch;
    color: #000;
    font-family: Lexend;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px; /* 171.429% */
`

export const SavesLocationEmptyImage = styled.img`
    align-self: center;
    width: 262px;
    height: 211.651px;
`

export const AddTripButtonContainer = styled.div`
    display: flex;
    padding: 0px 20px;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    align-self: stretch;
`

export const NextButton = styled.button`
    display: flex;
    height: 48px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    border-radius: 10px;
    background: var(--Light-Green, #009479);

    color: var(--White, #FFF);
    text-align: center;
    /* H4 Lexend Medium 16 px */
    font-family: Lexend;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const OdometerLink = styled.p`

    color: var(--Light-Green, #009479);
    text-align: center;
    font-family: Lexend;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
`

export const AddressCard = styled.div`
    display: flex;
    padding: 8px 24px 8px 16px;
    justify-content: center;
    align-items: center;
    gap: 16px;
    flex: 1 0 0;
    align-self: stretch;
    border-radius: 8px;
    
    /* Gian's Code */
    cursor: pointer;

    /* Style change when selected */
    background: ${props => (props.selected ? '#DEF7F4' : '#F3F6FF')};
    border: ${props => (props.selected ? '2px solid #009479' : '2px solid #F3F6FF')};
`

export const MapIcon = styled.img`
    display: flex;
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
`

export const AddressContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex: 1 0 0;
    align-self: stretch;
`

export const AddressTitle = styled.h3`
    align-self: stretch;
    color: #1D1B20;

    /* H5 Lexend Regular 16 px */
    font-family: Lexend;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    /* Gian's Code */
    margin: 10px 0 0;
`

export const AddressSubtitle = styled.p`
    height: 20px;
    align-self: stretch;
    overflow: hidden;
    color: #49454F;

    text-overflow: ellipsis;
    white-space: nowrap;
    /* Body Lexend Light 14 px */
    font-family: Lexend;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;

    /* Gian's Code */
    margin: 0 0 10px;
`