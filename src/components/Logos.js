import React, { PureComponent } from "react";
import styled from "styled-components";

import CityLABLogo from "components/CityLABLogo";
import TSBLogo from "components/TSBLogo";
import BerlinLogo from "components/BerlinLogo";

const StyledLogoTile = styled.div`
  display: flex;
  font-family: "Clan Book";
  flex-direction: column;
  font-size: 13px;

  > * {
    margin-bottom: 20px;
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
