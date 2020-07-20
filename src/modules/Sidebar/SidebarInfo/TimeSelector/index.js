import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { useStoreState, useStoreActions } from "easy-peasy";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
    padding: theme.spacing(4),
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
  const setSelectedShadeData = useStoreActions((a) => a.setSelectedShadeData);

  const MIN_TIME = shadeData[0]["hour"];
  const MAX_TIME = shadeData[shadeData.length - 1]["hour"];
  const NOON_TIME = shadeData.find(shadeInstance => shadeInstance["hour"] === 12)["hour"];

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
      value: MAX_TIME,
      label: `${valuetext(MAX_TIME)}`,
    }
  ];

  const classes = useStyles();

  return (
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
  );
};

export default TimeSelector;
