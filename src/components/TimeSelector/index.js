/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { useStoreState, useStoreActions } from "easy-peasy";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
    padding: `0 ${theme.spacing(2)}px`,
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
  const NOON_TIME = shadeData.find(shadeInstance => shadeInstance["hour"] === 12)["hour"];
  const AFTERNOON_TIME = shadeData.find(shadeInstance => shadeInstance["hour"] === 15)["hour"];
  const EVENING_TIME = shadeData.find(shadeInstance => shadeInstance["hour"] === 18)["hour"];

  const marks = [
    {
      value: MIN_TIME,
      label: `${valuetext(MIN_TIME)}`,
    },
    {
      value: NOON_TIME,
      label: `${valuetext(NOON_TIME)}`,
    },
    {
      value: AFTERNOON_TIME,
      label: `${valuetext(AFTERNOON_TIME)}`,
    },
    {
      value: EVENING_TIME,
      label: `${valuetext(EVENING_TIME)}`,
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
          color: "secondary",
          marginTop: 0,
        }}
      >
        {valuetext(selectedShadeData["hour"])}
      </h2>
      <div className={classes.root}>
        <Slider
          defaultValue={MIN_TIME}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-custom"
          min={MIN_TIME}
          max={MAX_TIME}
          step={1}
          valueLabelDisplay="off"
          marks={marks}
          track={false}
          color={"secondary"}
          onChangeCommitted={(event, value) => {
            setSelectedShadeData(value);
          }}
        />
      </div>
    </div>
  );
};

export default TimeSelector;
