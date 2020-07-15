import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

const TimeSelector = (p) => {
  const setSelectedShadeData = useStoreActions((a) => a.setSelectedShadeData);
  const shadeData = useStoreState((state) => state.shadeData);
  const selectedShadeData = useStoreState((state) => state.selectedShadeData);

  const inputIndex = shadeData.findIndex(
    (shadeInstance) => shadeInstance === selectedShadeData,
  );

  return (
    <>
      <input
        name="hour"
        type="range"
        min="0"
        max={shadeData.length - 1}
        value={inputIndex}
        onChange={(e) => {
          setSelectedShadeData(Number(e.target.value));
        }}
      />
      <label for="hour">{selectedShadeData["hour"]}h</label>
    </>
  );
};

export default TimeSelector;
