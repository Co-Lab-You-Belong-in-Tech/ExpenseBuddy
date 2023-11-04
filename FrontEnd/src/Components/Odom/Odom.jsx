import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom"
import styled from 'styled-components'
import CalendarIco from "../../Icons/CalendarIco.svg"
import TimeIco from "../../Icons/TimeIco.svg"
import MeterIco from "../../Icons/MeterIco.svg"
import InfoIco from "../../Icons/InfoIco.svg"

const base_api_url = import.meta.env.VITE_APP_BASE_API
const gian = import.meta.env.VITE_APP_GIAN

export const OdomFormContainer = styled.form`
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

export const CalcContainer = styled.div`
    display: flex;
    width: 350px;
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
    width: 167px;
    height: 2px;
    background: #E1E6EF;
`

export const InfoContainer = styled.div`
    display: flex;
    width: 330px;
    height: 28px;
    padding: 10px;
    align-items: center;
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
    width: 350px;
    height: 48px;
    padding: 10px 16px 10px 16px;

    /* Gian's Code */
    width: 350px;
    height: 45px;
`

export const NotesTextField = styled.textarea`
    width: 318px;
    padding: 14px 16px;
    align-items: flex-start;
    gap: 91px;
    flex: 1 0 0;
    border-radius: 6px;
    border: 2px solid var(--Line-Gray, #E1E6EF);
    background: #FFF;

    /* Gian's Code */
    font-family: Lexend;
    display: block;
    overflow: hidden;
    resize: both;
    min-height: 40px;
    line-height: 20px;
`

export const ButtonContainer = styled.div`
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

    const { register, reset, watch, handleSubmit } = useForm()
    const startOdom = watch('expense_odom_start', false)
    const endOdom = watch('expense_odom_end', false)
    const navigate = useNavigate()

    let dt = new Date()
    dt.setDate(dt.getDate())
    let current_date = dt.toISOString().substring(0,10)
    let current_time = dt.getHours() + ":" + dt.getMinutes()

    let mileage = endOdom - startOdom

    function showMiles() {
        if (mileage >= 0) {
            return mileage
        }
        else {
            return 0
        }
    }

    let reimbursedamt = (mileage * 0.655).toFixed(2)

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
                    <InfoMessage>How is the amount calculated?</InfoMessage>
                </InfoContainer>
                <DetailsContainer>
                    <FormLabel htmlFor="txtPurp">Purpose *</FormLabel>
                    <PurposeMenu 
                        id="txtPurp" 
                        placeholder="Select"
                        {...register('expense_type')} 
                        required >
                            <option value="business">Business</option>
                            <option value="medical" disabled>Medical</option>
                            <option value="charity" disabled>Charity</option>
                            <option value="moving" disabled>Moving</option>
                            <option value="other" disabled>Other</option>
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
                    <AlternateLink>Record location details instead</AlternateLink>
                </ButtonContainer>
            </OdomFormContainer>
            
        </>
    )
}
