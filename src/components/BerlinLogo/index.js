import React from "react";
import styled from "styled-components";
import BerlinLogoSrc from "assets/images/berlin.svg"; // eslint-disable-line

const BerlinLogo = styled.span`
  padding-top: 10px;
  img {
    width: 120px;
  }
`;

export default () => (
  <BerlinLogo>
    <img src={BerlinLogoSrc} alt="Berlin Logo" />
  </BerlinLogo>
);