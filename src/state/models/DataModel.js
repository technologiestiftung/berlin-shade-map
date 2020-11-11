import { action, thunk, computed } from "easy-peasy";
import { id } from "utils";

const DataModel = {
  data: null,
  shadeData: null,
  detailData: false,
  highlightData: false,
  selectedData: false,
  selectedShadeData: null,
  dataIsLoading: computed((state) => {
    return !state.data && !state.shadeData;
  }),
  loadDataSuccess: action((state, payload) => {
    state.data = payload;
    state.filteredData = payload;
  }),
  loadDataFail: action((state) => {
    state.data = null;
  }),
  loadData: thunk(async (actions) => {
    try {
      const response = await fetch("/data/locations.geojson");
      const data = await response.json();
      data.features.forEach((feat) => {
        feat.properties.autoid = id();
        feat.properties.isFaved = false;
      });
      actions.loadDataSuccess(data);
    } catch (_) {
      actions.loadDataFail();
    }
  }),
  loadShadeDataSuccess: action((state, payload) => {
    state.shadeData = payload;
    const currentHour = new Date().getHours();
    if (currentHour < payload[0]["hour"]) {
      state.selectedShadeData = payload[0];
    } else if (currentHour > payload[state.shadeData.length-1]["hour"]) {
      state.selectedShadeData = payload[state.shadeData.length-1];
    } else if (currentHour >= payload[0]["hour"] && currentHour <= payload[state.shadeData.length-1]["hour"]) {
      state.selectedShadeData = payload.find(shadeInstance => shadeInstance["hour"] === currentHour);
    } else {
      state.selectedShadeData = payload[0];
    }
  }),
  loadShadeDataFail: action((state) => {
    state.shadeData = null;
  }),
  loadShadeData: thunk(async (actions) => {
    try {
      const response = await fetch("/data/shadeData.json");
      const data = await response.json();
      actions.loadShadeDataSuccess(data);
    } catch (_) {
      actions.loadShadeDataFail();
    }
  }),
  setHighlightData: action((state, payload) => {
    state.highlightData = payload;
    // state.mapCenter = payload ? payload.geometry.coordinates : c.map.mapCenter;
    // state.mapZoom = payload ? [15] : c.map.mapZoom;
  }),
  setSelectedData: action((state, payload) => (state.selectedData = payload)),
  setSelectedShadeData: action((state, payload) => {
    if (!state.shadeData) return;

    const filteredShadeData = state.shadeData.find(
      (shadeInstance, index) => shadeInstance["hour"] === payload,
    );

    state.selectedShadeData = filteredShadeData;
  }),
};

export default DataModel;
