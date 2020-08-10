import React from "react";
import c from "../../../config";

import { Layer, Source } from "react-mapbox-gl";

const { tileSize, bounds, minZoom, opacity } = c.map.shades;

const ShadeLayer = (p) => {
  const { tilesetID } = p;

  const RASTER_SOURCE_OPTIONS = {
    type: "raster",
    url: `mapbox://${tilesetID}`,
    tileSize: tileSize,
    bounds: bounds,
  };

  const LAYOUT_OPTIONS = {
    visibility: "visible",
  };

  const PAINT_OPTIONS = {
    "raster-opacity":  opacity,
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
