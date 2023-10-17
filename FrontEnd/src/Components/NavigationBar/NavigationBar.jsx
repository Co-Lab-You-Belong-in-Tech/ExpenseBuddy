import React from "react";
import AddIcon from "./AddIcon";
import ReportsIcon from "./ReportsIcon";
import ExpensesIcon from "./ExpensesIcon";
import HomeIcon from "./HomeIcon";
import TripsIcon from "./TripsIcon";
import styled from "styled-components";
import { mobile } from "../../responsive";

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

export default function NavigationBar() {

    return (
        <>
            <Container>
                <Wrapper>
                <HomeIcon />
                <TripsIcon />
                <AddIcon />
                <ReportsIcon />
                <ExpensesIcon />
                </Wrapper>
            </Container>
        </>
    )
}