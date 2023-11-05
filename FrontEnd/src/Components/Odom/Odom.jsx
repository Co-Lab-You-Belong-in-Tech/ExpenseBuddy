import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom"
import styled from 'styled-components'
import CalendarIco from "../../Icons/CalendarIco.svg"
import TimeIco from "../../Icons/TimeIco.svg"
import MeterIco from "../../Icons/MeterIco.svg"
import InfoIco from "../../Icons/InfoIco.svg"
import { CAlert, CButton, CCloseButton } from '@coreui/react';

const base_api_url = import.meta.env.VITE_APP_BASE_API
const gian = import.meta.env.VITE_APP_GIAN

export const OdomFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: auto;
    height: 90vh;
    align-items: center;
    gap: 24px;
    background: white;
    padding: 16px 20px 20px 16px;

`

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 4px;
    width: 100%;

`

export const FormLabel = styled.label`
    color: var(--wf-base-800, #2D3648);
    /* Form field label */
    font-family: Lexend;
    font-size: medium;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

`

export const DateTextBox = styled.input`
    font-family: Lexend;
    font-size: large;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    border-radius: 6px;
    border: 2px solid var(--Line-Gray, #E1E6EF);
    background: #FFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 16px 10px 16px;

`

export const TimeTextBox = styled.input`
    font-family: Lexend;
    font-size: large;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    border-radius: 6px;
    border: 2px solid var(--Line-Gray, #E1E6EF);
    background: #FFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 16px 10px 36px;

    /* Gian's Code */
    background-image: url(${ TimeIco });
    background-position: 14px 12px; 
    background-repeat: no-repeat;
`

export const OdomDetailsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`

export const OdomForm = styled.div`
    display: flex;
    width: 100%;
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
    justify-content: center;
    align-items: center;
    height: 48px;
    padding: 10px 16px 10px 36px;
    width: 60%;
        
    /* Gian's Code */

    background-image: url(${ MeterIco });
    background-position: 14px 12px; 
    background-repeat: no-repeat;
    
`


export const CalcContainer = styled.div`
    display: flex;
    width: 95%;
    justify-content: space-between;
    align-items: center;
`

export const FigureContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

`

export const FigureTitle = styled.span`
    color: var(--Text, #2D3648);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Lexend;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px; /* 171.429% */

`

export const FigureValue = styled.span`
    color: var(--Text, #2D3648);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Lexend;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 100% */
`

export const FigureFix = styled.span`
    color: var(--Text, #2D3648);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Lexend;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px;
`

export const LineTemplate = styled.hr`
    width: 50%;
    height: 2px;
    background: #E1E6EF;
`

export const InfoContainer = styled.div`
    display: flex;
    width: 100%;
    height: 28px;
    padding: 10px;
    align-items: center;
    justify-content: center;
    gap: 10px;

`

export const InfoIcon = styled.div`
    background-image: url(${ InfoIco });
    display: flex;
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

`

export const InfoMessage = styled.a`
    color: var(--Light-Green, #009479);
    text-align: center;
    font-family: Lexend;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;

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
    width: 100%;
    height: 48px;
    padding: 10px 16px 10px 16px;

`

export const NotesTextField = styled.textarea`
    display: flex;
    flex-direction: column;
    padding: 14px 16px;
    align-items: stretch;
    gap: 91px;
    border-radius: 6px;
    border: 2px solid var(--Line-Gray, #E1E6EF);
    background: #FFF;

    /* Gian's Code */
    font-family: Lexend;
    resize: both;
    min-height: 40px;
    line-height: 20px;

`

export const ButtonContainer = styled.div`
    display: flex;
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
    border: none;
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

export const AlternateLink = styled.p`

    color: var(--Light-Green, #009479);
    text-align: center;
    font-family: Lexend;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;

`

export default function Odom() {

    const vars = {
        fontSize: 14,
        color: "#009479",
        width: "61%",
        
      }

    const [visible, setVisible] = useState(false)
    const [rate, setRate] = useState(0.655);
    const { register, reset, watch, handleSubmit } = useForm()
    const startOdom = watch('expense_odom_start', false)
    const endOdom = watch('expense_odom_end', false)
    const navigate = useNavigate()

    let dt = new Date()
    dt.setDate(dt.getDate())
    let current_date = dt.toISOString().substring(0,10)
    let current_time = dt.getHours() + ":" + dt.getMinutes()
    let mileage = endOdom - startOdom

    // Event handler to update the rate based on the selected option
    const handleDropdownChange = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue === "business") {
            setRate(0.655);
        } else {
            setRate(0);
        }
    };

    function showMiles() {
        if (mileage >= 0) {
            return mileage
        }
        else {
            return 0
        }
    }
  

    let reimbursedamt = (mileage * rate).toFixed(2)

    function reimbursement() {
        if (mileage >= 0) {
            return reimbursedamt
        }
        else {
            return 0.00
        }
    }

    async function handleSaveOdom(data) {
        data.expense_mileage = parseInt(mileage)
        data.expense_dollar_amt = parseInt(reimbursedamt)
        data.user_id = 1
        
        const res = await fetch(`${base_api_url}/expense`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${gian}`
            },
            body: JSON.stringify(data)
        })
        console.log(data)
        if (!res.ok) {
            throw new Error("Failed to fetch")
        }
        const dataRes = await res.json()
        const saved = await dataRes
        console.log(saved)
        navigate('/success')
    }

    return (
        <>
            <OdomFormContainer onSubmit={handleSubmit(handleSaveOdom)}>
                <DetailsContainer>
                    <FormLabel htmlFor="txtDatePicker">Date *</FormLabel>
                    <DateTextBox 
                        type="date" 
                        id="txtDatePicker" 
                        defaultValue={current_date}
                        required
                        {...register('expense_date')} />
                </DetailsContainer>
                <DetailsContainer>
                    <FormLabel htmlFor="txtTime">Time *</FormLabel>
                    <TimeTextBox 
                        type="time" 
                        id="txtTime" 
                        defaultValue={current_time}
                        required
                        {...register('expense_time')} />
                </DetailsContainer>
                <OdomDetailsContainer>
                    <OdomForm>
                        <FormLabel htmlFor="txtStartOdom">Starting Odometer *</FormLabel>
                        <OdomTextBox 
                            id="txtStartOdom" 
                            type="number"
                            placeholder="e.g. 123456" 
                            name="startOdom" 
                            required
                            {...register('expense_odom_start')} 
                        />
                    </OdomForm>
                    <OdomForm>
                        <FormLabel htmlFor="txtEndOdom">Ending Odometer *</FormLabel>
                        <OdomTextBox 
                            id="txtEndOdom" 
                            type="number"
                            placeholder="e.g. 123456"
                            name="endOdom" 
                            required
                            {...register('expense_odom_end')} 
                        />
                    </OdomForm>
                </OdomDetailsContainer>
                <CalcContainer>
                    <FigureContainer>
                        <FigureTitle>Distance</FigureTitle>
                        <FigureValue>{showMiles()} <FigureFix>mi</FigureFix></FigureValue>
                    </FigureContainer>
                    <LineTemplate />
                    <FigureContainer>
                        <FigureTitle>Amount</FigureTitle>
                        <FigureValue><FigureFix>$</FigureFix> {reimbursement()}</FigureValue>
                    </FigureContainer>
                </CalcContainer>
                <InfoContainer>
                    <InfoIcon />
                    <InfoMessage  onClick={() => setVisible(true)}>How is the amount calculated?</InfoMessage>
                </InfoContainer>
                    <CAlert color="info" dismissible visible={visible} onClose={() => setVisible(false)} style={vars}>
                        Business mileage reimbursement rate in the US for the 2023 tax season is $0.655 per mile.
                    </CAlert>
                <DetailsContainer>
                    <FormLabel htmlFor="txtPurp">Purpose *</FormLabel>
                    <PurposeMenu 
                        onChange={handleDropdownChange}
                        id="txtPurp" 
                        placeholder="Select"
                        {...register('expense_type')} 
                        required >
                            <option value="business">Business</option>
                            <option value="other">Other</option>
                    </PurposeMenu>
                </DetailsContainer>
                <DetailsContainer>
                    <FormLabel htmlFor="txtNotes">Notes</FormLabel>
                    <NotesTextField 
                        id="txtNotes" 
                        placeholder="Write a note here (optional)" 
                        {...register('expense_notes')} />
                </DetailsContainer>
                <ButtonContainer>
                    <NextButton>Next</NextButton>
                    {/* <AlternateLink>Record location details instead</AlternateLink> */}
                </ButtonContainer>

            </OdomFormContainer>
            
        </>
    )
}
