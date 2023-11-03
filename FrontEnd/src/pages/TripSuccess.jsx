import React from "react";
import { BrowserIosSafariWrapper } from "./BrowserIosSafariWrapper";
import { Header } from "./Header";
import { LargeButton } from "./LargeButton";

const Container = styled.div` 
    background-color: #ffffff;
    height: 844px;
    overflow: hidden;
    position: relative;
    width: 390px;
    `
  
//   .add-trip-success .frame-2 {
//     align-items: center;
//     display: flex;
//     flex-direction: column;
//   }
  

//   .add-trip-success .frame-3 {
//     align-items: center;
//     align-self: stretch;
//     display: flex;
//   }
  
//   .add-trip-success .group {
//     align-self: stretch;
//     position: relative;
//     width: 100%;
//   }
  
//   .add-trip-success .text-wrapper-2 {
//     font-family: "Lexend-Regular", Helvetica;
//     font-size: 24px;
//     font-weight: 400;
//     text-align: center;
//   }
  
//   .add-trip-success .p {
//     align-self: stretch;
//     font-family: "Lexend-Light", Helvetica;
//     font-weight: 300;
//     text-align: center;
//   }
  
//   .add-trip-success .button-container {
//     align-items: flex-start;
//     align-self: stretch;
//     display: flex;
//     flex-direction: column;
//     width: 100%;
//   }
  



export const AddTripSuccess = () => {
  return (
    <Container>
      <div className="frame-2">
        <img className="undraw-order" alt="Undraw order" src="undraw-order-confirmed-re-g0if-1.svg" />
        <div className="frame-3">
          <div className="group">
            <div className="text-wrapper-2">Success!</div>
          </div>
          <p className="p">Your trip has been logged.</p>
        </div>
        <div className="button-container">
          <LargeButton
            buttonState="enabled"
            buttonType="primary"
            className="large-button-instance"
            iconPlusWrapperIconPlusClassName="large-button-2"
            text="Add another trip"
          />
          <LargeButton
            buttonState="enabled"
            buttonType="secondary"
            className="large-button-instance"
            icon={false}
            text="View all trips"
          />
        </div>
      </div>
      <Header
        className="header-instance"
        frameClassName="header-3"
        hasContent={false}
        hasFrame={false}
        headerClassName="header-2"
        property1="default"
      />
    </Container>
  );
};