import React from "react";
import { Box } from "rebass/styled-components";
import styled, { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "theme-ui";
import GlobalStyle from "styles/GlobalStyle";
import { withRouter, Route } from "react-router-dom";
import Theme from "styles/Theme";
import { useStoreState } from "easy-peasy";

import Map from "modules/Map";
import Sidebar from "modules/Sidebar";
import Nav from "components/Nav";
import LoadingOverlay from "components/LoadingOverlay";
import ZoomNote from "components/ZoomNote";
import Cookies from "components/Cookies";

const DynamicGlobalStyle = createGlobalStyle``;

const StyledWrapper = styled(Box)`
  width: 100%;
  height: 100%;
  transition: all 0.25s ease-in-out;
`;

const AppWrapper = () => {
  const dataIsLoading = useStoreState((state) => state.dataIsLoading);
  const styleIsLoading = useStoreState((state) => state.styleIsLoading);
  // const data = useStoreState((state) => state.data);
  const filteredData = useStoreState((state) => state.filteredData);
  const mapCenter = useStoreState((state) => state.mapCenter);
  const mapZoom = useStoreState((state) => state.mapZoom);
  const style = process.env.REACT_APP_MAP_STYLE;

  const webpIsSupported = useStoreState((state) => state.webpIsSupported);
  const shadeData = useStoreState((state) => state.shadeData);
  const selectedShadeData = useStoreState((state) => state.selectedShadeData);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <DynamicGlobalStyle />
      <StyledWrapper>
        <LoadingOverlay isLoading={dataIsLoading || styleIsLoading} />
        <Route
          path={["/liste/:itemId", "/liste", "/", "/info"]}
          render={() => <Sidebar data={filteredData} />}
        />
        <Nav />
        {webpIsSupported && <ZoomNote />}
        <Cookies />
        {filteredData && (
          <Map
            data={filteredData}
            shadeData={shadeData}
            selectedShadeData={selectedShadeData}
            mapCenter={mapCenter}
            mapZoom={mapZoom}
            style={style}
          />
        )}
      </StyledWrapper>
    </ThemeProvider>
  );
};

export default withRouter(AppWrapper);
