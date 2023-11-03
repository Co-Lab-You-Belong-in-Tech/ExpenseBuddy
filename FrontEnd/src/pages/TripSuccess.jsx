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
  
  .add-trip-success .frame-2 {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 32px;
    left: 20px;
    position: absolute;
    top: 197px;
    width: 350px;
  }
  
  .add-trip-success .undraw-order {
    height: 220px;
    position: relative;
    width: 289.16px;
  }
  
  .add-trip-success .frame-3 {
    align-items: center;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 16px;
    position: relative;
    width: 100%;
  }
  
  .add-trip-success .group {
    align-self: stretch;
    height: 22px;
    margin-right: -2px;
    position: relative;
    width: 100%;
  }
  
  .add-trip-success .text-wrapper-2 {
    color: var(--text);
    font-family: "Lexend-Regular", Helvetica;
    font-size: 24px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: 21.8px;
    position: absolute;
    text-align: center;
    top: 0;
    width: 350px;
  }
  
  .add-trip-success .p {
    align-self: stretch;
    color: var(--text);
    font-family: "Lexend-Light", Helvetica;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: -0.16px;
    line-height: 21.8px;
    position: relative;
    text-align: center;
  }
  
  .add-trip-success .button-container {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 16px;
    position: relative;
    width: 100%;
  }
  
  .add-trip-success .large-button-instance {
    align-self: stretch !important;
    width: 100% !important;
  }
  
  .add-trip-success .large-button-2 {
    background-image: url(./icon-plus-2.svg) !important;
    height: 20px !important;
    position: relative !important;
    width: 20px !important;
  }
  
  .add-trip-success .header-instance {
    left: 0 !important;
    position: absolute !important;
    top: 0 !important;
  }
  
  .add-trip-success .header-2 {
    justify-content: flex-end !important;
  }
  
  .add-trip-success .header-3 {
    align-items: center !important;
    justify-content: flex-end !important;
  }
  
  .add-trip-success .browser-ios-safari-2 {
    left: 0 !important;
    position: absolute !important;
    top: 790px !important;
  }
  

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
        statusBarIphoneWrapperStatusBarIphoneCap="cap-4.svg"
        statusBarIphoneWrapperStatusBarIphoneCellularConnection="cellular-connection-4.svg"
        statusBarIphoneWrapperStatusBarIphoneWifi="wifi-4.svg"
      />
      <BrowserIosSafariWrapper className="browser-ios-safari-2" />
    </Container>
  );
};