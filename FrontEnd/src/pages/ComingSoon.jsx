import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import dashboardpic from '../Images/dashboard.svg'
import TopBar from '../Components/TopBar/TopBar';

const Container = styled.div`
    width: auto;
    height: 75vh;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding: 3%;
    overflow: auto;
`
const ImgageCardWrapper = styled.div`
  width: 96%;
  justify-content: center;
  align-items: center;
  padding: 10px;
  display: flex;
  flex-direction: column;
`
const DashImage = styled.img`
  width: 100%;
`

function ComingSoon() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the homepage after 5 seconds (5000 milliseconds)
    const redirectTimeout = setTimeout(() => {
      navigate('/');
    }, 5000);

    // Clear the timeout when the component unmounts
    return () => {
      clearTimeout(redirectTimeout);
    };
  }, [navigate]);

  return (
    <>
    <TopBar headerTitle="Coming Soon..." />
    <Container>
      
      <ImgageCardWrapper>
      <DashImage src={dashboardpic}/>
      </ImgageCardWrapper>
      <h3>We are working hard to bring you this content</h3>
      <p>Redirecting to the homepage in 5 seconds...</p>
    </Container>
    </>
  );
}

export default ComingSoon;
