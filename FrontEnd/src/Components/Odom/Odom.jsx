import React from 'react'
import styled from 'styled-components'
import CalendarIco from "../../Icons/CalendarIco.svg"
import TimeIco from "../../Icons/TimeIco.svg"
import MeterIco from "../../Icons/MeterIco.svg"

export const OdomContainer = styled.div`
    display: flex;
    width: 390px;
    height: 844px;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    background: #FFF;

    /* Gian's Code */
    padding-top: 20px;
    height: auto;
`

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
`

export const FormLabel = styled.label`
    color: var(--wf-base-800, #2D3648);
    /* Form field label */
    font-family: Lexend;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const DateTextBox = styled.input`
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
    padding: 10px 16px 10px 16px;

    /* Gian's Code */
    width: 314px;
    height: 20px;
`

export const TimeTextBox = styled.input`
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
    padding: 10px 16px 10px 36px;

    /* Gian's Code */
    width: 294px;
    height: 20px;
    background-image: url(${ TimeIco });
    background-position: 14px 12px; 
    background-repeat: no-repeat;
`

export const OdomDetailsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 90%;
`

export const OdomForm = styled.div`
    display: flex;
    width: 48%;
    height: 70px;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
`

export const OdomTextBox = styled.input`
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
    padding: 10px 16px 10px 36px;

    /* Gian's Code */
    width: 111px;
    height: 20px;
    background-image: url(${ MeterIco });
    background-position: 14px 12px; 
    background-repeat: no-repeat;
`

export const PurposeMenu = styled.select`
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
    padding: 10px 16px 10px 16px;

    /* Gian's Code */
    width: 314px;
    height: 20px;
`

export default function Odom() {

    var curr = new Date()
    curr.setDate(curr.getDate())
    var date = curr.toISOString().substring(0,10)

    return (
        <>
            <OdomContainer>
                <DetailsContainer>
                    <FormLabel htmlFor="txtDatePicker">Date *</FormLabel>
                    <DateTextBox type="date" id="txtDatePicker" defaultValue={date}/>
                </DetailsContainer>
                <DetailsContainer>
                    <FormLabel htmlFor="txtTime">Time *</FormLabel>
                    <TimeTextBox id="txtTime" />
                </DetailsContainer>
                <OdomDetailsContainer>
                    <OdomForm>
                        <FormLabel htmlFor="txtStartOdom">Starting Odometer *</FormLabel>
                        <OdomTextBox id="txtStartOdom" placeholder="e.g. 123456" />
                    </OdomForm>
                    <OdomForm>
                        <FormLabel htmlFor="txtEndOdom">Ending Odometer *</FormLabel>
                        <OdomTextBox id="txtEndOdom" placeholder="e.g. 123456" />
                    </OdomForm>
                </OdomDetailsContainer>
                <DetailsContainer>
                    <FormLabel htmlFor="txtPurp">Purpose *</FormLabel>
                    <PurposeMenu id="txtPurp" placeholder="Select">
                        <option selected>Select</option>
                    </PurposeMenu>
                </DetailsContainer>
            </OdomContainer>
        </>
    )
}
