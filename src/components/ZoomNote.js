/** @jsx jsx */
import { jsx } from "theme-ui";
// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";
import { useStoreState } from "easy-peasy";

import c from "../config";

const shadesMinZoom = c.map.shades.minZoom;

const StyledWrapper = styled.div`
  position: fixed;
  top: 15px;
  right: 15px;
  width: 250px;
  box-shadow: 0 2px 40px 0 rgba(30, 55, 145, 0.15);
  z-index: 3000;
`;

const ZoomNote = () => {
  const mapZoom = useStoreState((state) => state.mapZoom);
  const noteIsVisible = mapZoom[0] < shadesMinZoom;
  
  return (
    <StyledWrapper
      sx={{
        display: noteIsVisible ? "block" : "none",
      }}
    >
      <div
        sx={{
          fontSize: 1,
          color: theme => theme.colors.text,
          backgroundColor: theme => theme.colors.background,
          padding: [3, 4],
        }}
      >
        Bitte zoome etwas näher, um die Schattenwürfe zu sehen.
      </div>
    </StyledWrapper>
  );
};

export default ZoomNote;
