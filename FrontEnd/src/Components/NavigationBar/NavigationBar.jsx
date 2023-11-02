import React from "react";
import { NavLink } from "react-router-dom";
import AddIcon from "./AddIcon";
import ReportsIcon from "./ReportsIcon";
import ExpensesIcon from "./ExpensesIcon";
import HomeIcon from "./HomeIcon";
import TripsIcon from "./TripsIcon";
import styled from "styled-components";
import { mobile } from "../../responsive";
import Sheet from 'react-modal-sheet';
import { useState } from 'react';
import AddPopUp from "../../pages/AddPopUp";
import AddTripPopUp from "../../pages/AddTripPopUp";

const Container = styled.div`
    width: auto;
    height: 10vh;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Wrapper = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`
const BottomSheetButton = styled.button`
    border: none;
    background-color: white;
`

export default function NavigationBar() {

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <Container>
                <Wrapper>

                    <NavLink to='/' className="navlink">
                        <HomeIcon />
                    </NavLink>

                    <NavLink to='/trips' className="navlink">
                        <TripsIcon />
                    </NavLink>

                    <BottomSheetButton onClick={() => setOpen(true)}><AddIcon /></BottomSheetButton>
                    
                    <NavLink to='/reports' className="navlink">
                        <ReportsIcon />
                    </NavLink>
                    
                    <NavLink to='/expenses' className="navlink">
                        <ExpensesIcon />
                    </NavLink>                
                    
                    <Sheet 
                        isOpen={isOpen} 
                        onClose={() => setOpen(false)}
                        detent="content-height"
                    >
                    <Sheet.Container>
                            <Sheet.Header />
                            <Sheet.Content>
                                {
                                // <AddPopUp />
                                <AddTripPopUp />
                                }
                            </Sheet.Content>
                    </Sheet.Container>
                    <Sheet.Backdrop />
                    </Sheet>
                    </Wrapper>
            </Container>
        </>
    )
}