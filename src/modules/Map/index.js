import React from "react";
import ReactMapboxGl from "react-mapbox-gl";
import { withRouter, Route } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";
import { easeCubic as d3EaseCubic } from "d3";

import MarkerLayer from "./Layer/MarkerLayer";
import ShadeLayer from "./Layer/ShadeLayer";
import Tooltip from "components/Tooltip";

import c from "config";

const mapConfig = c.map.config;

const MapGL = ReactMapboxGl({ ...mapConfig });

const Map = (p) => {
  const { mapCenter, mapZoom, style, data, selectedShadeData } = p;

  const setStyleIsLoading = useStoreActions(
    (action) => action.setStyleIsLoading,
  );
  const setMapZoom = useStoreActions((action) => action.setMapZoom);
  const webpIsSupported = useStoreState((state) => state.webpIsSupported);

  return (
    <MapGL
      zoom={mapZoom}
      center={mapCenter}
      style={style}
      containerStyle={{
        height: "100%",
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
      }}
      animationOptions={{ easing: d3EaseCubic }}
      onStyleLoad={() => setStyleIsLoading(false)}
      onZoomEnd={(e) => setMapZoom(e.getZoom())}
    >
      {webpIsSupported && selectedShadeData && (
        <ShadeLayer tilesetID={selectedShadeData["tileset_id"]} />
      )}
      <Route
        path={["/", "/suche", "/liste", "/favoriten", "/info"]}
        render={() => {
          return <MarkerLayer data={data} />;
        }}
      />
      <Tooltip />
    </MapGL>
  );
};

export default withRouter(Map);
