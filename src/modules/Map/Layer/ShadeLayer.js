import React from "react";

import { Layer, Source } from "react-mapbox-gl";

const ShadeLayer = (p) => {
  const { tilesetID, isVisible } = p;

  const RASTER_SOURCE_OPTIONS = {
    type: "raster",
    url: `mapbox://${tilesetID}`,
    tileSize: 512,
  };

  const LAYOUT_OPTIONS = {
    visibility: isVisible ? "visible" : "none",
  };

  const PAINT_OPTIONS = {
    "raster-opacity": 0.7,
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
      />
    </>
  );
};

export default ShadeLayer;
