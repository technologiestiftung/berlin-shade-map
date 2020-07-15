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
    visibility: "visible",
  };

  const PAINT_OPTIONS = {
    "raster-opacity": isVisible ? 0.7 : 0,
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
