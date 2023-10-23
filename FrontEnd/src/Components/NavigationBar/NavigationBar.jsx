import React from "react";
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
    justify-content: center;
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
                <HomeIcon />
                <TripsIcon />
                <BottomSheetButton onClick={() => setOpen(true)}><AddIcon /></BottomSheetButton>
                
                <ReportsIcon />
                <ExpensesIcon />
                

                <Sheet 
                isOpen={isOpen} 
                onClose={() => setOpen(false)}
                snapPoints={[600, 500, 300, 0]}
                initialSnap={2}
                detent="content-height"
                >
                <Sheet.Container>
                    <Sheet.Header />
                    <Sheet.Content>
                        {
                        <AddPopUp />
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