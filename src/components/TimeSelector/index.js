/** @jsx jsx */
//import React from "react";
import { jsx } from "theme-ui";
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { useStoreState, useStoreActions } from "easy-peasy";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
  },
  margin: {
    height: theme.spacing(3),
  },
}));

function valuetext(value) {
  return `${value} Uhr`;
}

const TimeSelector = (p) => {
  const shadeData = useStoreState((state) => state.shadeData);
  const selectedShadeData = useStoreState((state) => state.selectedShadeData);
  const setSelectedShadeData = useStoreActions((a) => a.setSelectedShadeData);

  const MIN_TIME = shadeData[0]["hour"];
  const MAX_TIME = shadeData[shadeData.length - 1]["hour"];
  const MORNING_TIME = shadeData.find(shadeInstance => shadeInstance["hour"] === 10)["hour"];
  const NOON_TIME = shadeData.find(shadeInstance => shadeInstance["hour"] === 12)["hour"];
  const AFTERNOON_TIME = shadeData.find(shadeInstance => shadeInstance["hour"] === 14)["hour"];

  const [ sliderValue, setSliderValue ] = useState(selectedShadeData["hour"]);

  const marks = [
    {
      value: MORNING_TIME,
      label: `${valuetext(MORNING_TIME)}`,
    },
    {
      value: NOON_TIME,
      label: `${valuetext(NOON_TIME)}`,
    },
    {
      value: AFTERNOON_TIME,
      label: `${valuetext(AFTERNOON_TIME)}`,
    },
  ];

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
          color: "primary",
          marginTop: 0,
        }}
      >
        {valuetext(sliderValue)}
      </h2>
      <div className={classes.root}>
        <Slider
          sx={{
            color: "primary"
          }}
          value={sliderValue}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-custom"
          min={MIN_TIME}
          max={MAX_TIME}
          step={1}
          valueLabelDisplay="off"
          marks={marks}
          track={false}
          onChange={(event, value) => {
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
