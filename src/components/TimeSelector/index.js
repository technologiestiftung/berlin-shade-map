/** @jsx jsx */
//import React from "react";
import { jsx } from "theme-ui";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import { useStoreState, useStoreActions } from "easy-peasy";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
    padding: `0 ${theme.spacing(3)}px`,
  },
  slider: {
    color: "black",
  },
  margin: {
    height: theme.spacing(3),
  },
}));

function valuetext(value) {
  return `${value}:00`;
}

const TimeSelector = (p) => {
  const shadeData = useStoreState((state) => state.shadeData);
  const selectedShadeData = useStoreState((state) => state.selectedShadeData);
  const setSelectedShadeData = useStoreActions((a) => a.setSelectedShadeData);

  const MIN_TIME = shadeData[0]["hour"];
  const MAX_TIME = shadeData[shadeData.length - 1]["hour"];

  const [sliderValue, setSliderValue] = useState(selectedShadeData["hour"]);

  const marks = shadeData.map((shadeInstance) => {
    return {
      value: shadeInstance["hour"],
      label: `${valuetext(shadeInstance["hour"])}`,
    };
  });

  const classes = useStyles();

  return (
    <div
      sx={{
        paddingBottom: [3, 4],
      }}
    >
      <span
        sx={{
          fontSize: 1,
          color: "text",
        }}
      >
        Schatten um:
      </span>
      <h2
        sx={{
          fontSize: 4,
          fontFamily: "Clan Bold",
          color: "text",
          marginTop: 0,
        }}
      >
        {valuetext(sliderValue)} Uhr
      </h2>
      <div className={classes.root}>
        <Slider
          className={classes.slider}
          value={sliderValue}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-custom"
          min={MIN_TIME}
          max={MAX_TIME}
          step={1}
          valueLabelDisplay="off"
          marks={marks}
          track={false}
          onChange={(_event, value) => {
            setSliderValue(value);
          }}
          onChangeCommitted={(event, value) => {
            setSelectedShadeData(value);
          }}
        />
      </div>
    </div>
  );
};

export default TimeSelector;
