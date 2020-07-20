import React from "react";
import ReactMapboxGl from "react-mapbox-gl";
import styled from "styled-components";
import { withRouter, Route } from "react-router-dom";

import MarkerLayer from "./Layer/MarkerLayer";
import ShadeLayer from "./Layer/ShadeLayer";
import Tooltip from "components/Tooltip";
import LogoTile from "./LogoTile";

import c from "config";

const mapConfig = c.map.config;

const MapGL = ReactMapboxGl({ ...mapConfig });

const MapWrapper = styled.div`
  height: 100vh;
  width: 100%;
  flex: 1;
  flex-shrink: 1;
  flex-grow: 1;
  position: relative;
  opacity: 1;
`;

const Map = (p) => {
  const { mapCenter, mapZoom, style, data, shadeData, selectedShadeData } = p;

  return (
    <MapWrapper>
      <MapGL
        zoom={mapZoom}
        center={mapCenter}
        style={style}
        containerStyle={{ height: "100%", width: "100%" }}
      >
        <Route
          path={["/", "/suche", "/liste", "/favoriten", "/info"]}
          render={() => <MarkerLayer data={data} />}
        />
        {shadeData &&
          shadeData.map((shadeInstance, i) => {
            return (
              <ShadeLayer
                tilesetID={shadeInstance["tileset_id"]}
                isVisible={shadeInstance === selectedShadeData}
                key={i}
              />
            );
          })}
        <Tooltip />
        <LogoTile />
      </MapGL>
    </MapWrapper>
  );
};

export default withRouter(Map);
