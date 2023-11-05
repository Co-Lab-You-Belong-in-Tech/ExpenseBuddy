import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div `
    display: flex;
    width: 100%;
`
const MonthWrapper = styled.select `
    display: flex;
    width: auto;
    font-size: medium;
    font-family: 'Lexend', sans-serif;
    border: none;

`
const YearWrapper = styled.select `
    display: flex;
    width: auto;
    font-size: medium;
    font-family: 'Lexend', sans-serif;
    border: none;
`

const MonthYearPicker = ({setDateFilter}) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, index) => currentYear - index);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(months[new Date().getMonth()]);

  const handleYearChange = (e) => {
    setSelectedYear(parseInt(e.target.value));
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  useEffect(() => {
    setDateFilter({
      year: selectedYear,
      month: months.indexOf(selectedMonth) + 1
    })
    console.log(selectedYear, selectedMonth)
  }, [selectedYear, selectedMonth])
  
  return (
    <Container>
      <MonthWrapper value={selectedMonth} onChange={handleMonthChange}>
        {months.map((month, index) => (
          <option key={index} value={month}>
            {month}
          </option>
        ))}
      </MonthWrapper>
      <YearWrapper value={selectedYear} onChange={handleYearChange}>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </YearWrapper>
    </Container>
  );
};

export default MonthYearPicker;
