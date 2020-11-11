import React from "react";
import styled from "styled-components";
import { Popup } from "react-mapbox-gl";
import { useStoreState } from "easy-peasy";

import CardHeader from "components/Card/CardHeader";

const StyledPopup = styled(Popup)`
  &&& {
    max-width: 250px;
    line-height: 1;
`;

const Tooltip = (p) => {
  const tooltipPos = useStoreState((state) => state.tooltipPos);
  const tooltipData = useStoreState((state) => state.tooltipData);

  if (!tooltipData || !tooltipPos) {
    return null;
  }

  return (
    <StyledPopup coordinates={tooltipPos} style={{ zIndex: 2000 }}>
      <CardHeader data={tooltipData} type="black" />
    </StyledPopup>
  );
};

export default Tooltip;
