import React from "react";
import styled from "styled-components";
import TSBLogoSrc from "assets/images/tsb-logo.svg"; // eslint-disable-line

const TSBLogo = styled.a.attrs({
  href: "https://www.technologiestiftung-berlin.de/",
  target: "_blank",
})`
  padding-top: 10px;
  img {
    width: 120px;
  }
`;

export default () => (
  <TSBLogo>
    <img src={TSBLogoSrc} alt="Technologiestiftung Berlin Logo" />
  </TSBLogo>
);