import { actionOn } from "easy-peasy";
import { scaleOrdinal } from "d3";
import c from "config";

const customColorScheme = [
  "#A6CEE3",
  "#B2DF8A",
  "#1F78B4",
  "#E31A1C",
  "#09AAA4",
];

const LegendModel = {
  fetchLegend: actionOn(
    (actions) => actions.loadDataSuccess,
    (state, target) => {
      const { payload } = target;
      const legendType = c.about.legend.id;
      let legendArr = [];
      let legendColorCodes = [];
      const color = scaleOrdinal(customColorScheme);

      payload.features.forEach((feature, i) => {
        // const { properties } = feature;

        const val = feature.properties[legendType];
        if (!legendArr.includes(val)) {
          legendArr.push(val);
          legendColorCodes.push({ id: val, color: color(i), count: 1 });
        } else {
          const active = legendColorCodes.find(({ id }) => id === val);
          active.count += 1;
        }
      });

      payload.features.map((feature) => {
        const val = feature.properties[legendType];
        const colorObj = legendColorCodes.find(({ id }) => id === val);
        feature.properties.color = colorObj.color;
        feature.properties.filtered = false;
        return {
          ...feature,
        };
      });

      state.categories = legendColorCodes;
    },
  ),
};

export default LegendModel;
