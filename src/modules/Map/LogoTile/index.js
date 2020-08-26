import React, { PureComponent } from "react";
import styled from "styled-components";

import CityLABLogo from "components/CityLABLogo";
import TSBLogo from "components/TSBLogo";
import BerlinLogo from "components/BerlinLogo";

const StyledLogoTile = styled.div`
  position: absolute;
  top: 25px;
  right: 25px;
  display: flex;
  font-family: "Clan Book";
  flex-direction: column;
  z-index: 1000;
  font-size: 12px;

  ::before {
    position: absolute;
    content: '';
    width: 120%;
    height: 120%;
    transform: translate3D(-10%, -10%, 0);
    background-color: rgba(255,255,255,.6);
    filter: blur(20px);
    z-index: -1;
  }

  @media (max-width: 768px) {
    top: auto;
    bottom: 15px;
    left: 15px;
    max-width: 120px;
  }
`;

const StyledCityLABLogo = styled(CityLABLogo)`
  padding-left: 0px;
`;

class LogoTile extends PureComponent {
  render() {
    return (
      <StyledLogoTile>
        <StyledCityLABLogo />
        Ein Projekt der:
        <TSBLogo />
        Gefördert durch:
        <BerlinLogo />
      </StyledLogoTile>
    );
  }
}

export default LogoTile;
