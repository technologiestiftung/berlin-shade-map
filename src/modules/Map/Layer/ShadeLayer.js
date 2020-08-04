import React from "react";

import { Layer, Source } from "react-mapbox-gl";

const ShadeLayer = (p) => {
  const { tilesetID } = p;

  const minZoom = 15;

  const RASTER_SOURCE_OPTIONS = {
    type: "raster",
    url: `mapbox://${tilesetID}`,
    tileSize: 256,
    bounds: [13.1,52.3,13.8,52.7],
  };

  const LAYOUT_OPTIONS = {
    visibility: "visible",
  };

  const PAINT_OPTIONS = {
    "raster-opacity":  0.45,
  };

  return (
    <>
      <Source id={tilesetID} tileJsonSource={RASTER_SOURCE_OPTIONS} />
      <Layer
        type="raster"
        id={tilesetID}
        sourceId={tilesetID}
        layout={LAYOUT_OPTIONS}
        paint={PAINT_OPTIONS}
        minZoom={minZoom}
      />
    </>
  );
};

export default ShadeLayer;
