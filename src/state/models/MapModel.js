import { action } from "easy-peasy";
import c from "config";

const MapModel = {
  mapCenter: c.map.mapCenter,
  setMapCenter: action((state, payload) => {
    state.mapCenter = payload;
  }),
  mapZoom: c.map.mapZoom,
  setMapZoom: action((state, payload) => {
    state.mapZoom[0] = payload;
  }),
  styleIsLoading: true,
  setStyleIsLoading: action((state, payload) => {
    state.styleIsLoading = payload;
  }),
  mapboxCookieAccepted: document.cookie ? document.cookie
    .split('; ')
    .find(row => row.startsWith('disclaimerAccepted'))
    .split('=')[1] : false,
  setMapboxCookieAccepted: action((state, payload) => {
    state.mapboxCookieAccepted = payload;
  })
};

export default MapModel;
