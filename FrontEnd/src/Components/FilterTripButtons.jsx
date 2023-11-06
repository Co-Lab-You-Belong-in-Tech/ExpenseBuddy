import React, { useState } from 'react';
import styled from 'styled-components';
import CarProfile from '../Icons/CarProfile.svg'
import Briefcase from '../Icons/briefcase.svg'

const Container = styled.div`
    display: flex;
    flex-direction: row;
`
const Bubble = styled.button`
    background-color: white;
    border-color: #2D3648;
    color: #2D3648;
    border: solid;
    border-width: 1px;
    display: flex;
    flex-direction: row;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 6px;
    padding-bottom: 6px;
    border-radius: 20px;
    width: auto;
    margin: 5px;
    font-size: small;
    align-items: center;
    cursor:pointer;

    &:focus {
        background-color: #009479;
        color: white;
        border-color: #009479;
    }
`
const Wrapper = styled.a`
    display: flex;

`
const IconImage = styled.img`
    padding-right: 3px;
    
`

const FilterableList = ({setFilter }) => {
  const filter = "All Trips";
  const items = [
    { id: 1, name: 'All Trips', category: 'A' },
    { id: 2, name: 'Business', category: 'B' },
    { id: 3, name: 'Other', category: 'C' },
    // Add more items here...
  ];

  const filteredItems = filter === 'All Trips' ? items : items.filter(item => item.category === filter);

  return (
    <div>
      <Container>
        <Bubble onClick={() => setFilter('All Trips')}>
            <Wrapper><IconImage src={CarProfile} /></Wrapper>
            All Trips
        </Bubble>


        <Bubble onClick={() => setFilter('Business')}>
        <IconImage src={Briefcase} />
            Business
        </Bubble>

        <Bubble onClick={() => setFilter('Other')}>
            Other
        </Bubble>
      </Container>
    </div>
  );
};

export default FilterableList;
