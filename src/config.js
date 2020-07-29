export default {
  socialTags: {},
  map: {
    mapCenter: [13.347142, 52.514575],
    mapZoom: [16],
    marker: {
      color: {
        selected: "green",
        default: "black",
      },
    },
    config: {
      minZoom: 6,
      maxZoom: 17,
      dragRotate: false,
      bearing: 0,
      maxBounds: [
        [10, 50],
        [15, 54],
      ],
      accessToken: process.env.REACT_APP_MAP_TOKEN,
      style: process.env.REACT_APP_MAP_STYLE,
    },
  },
  about: {
    legend: {
      id: "OBJARTNAME",
    },
    title: "Berliner Erfrischungskarte",
    paragraphs: [
      {
        title: "Worum geht's hier?",
        content:
          "In der Sommerzeit gibt es besonders morgens und mittags starke Sonneneinstrahlung. Diese Karte zeigt Schattenbereiche im Berliner Stadtgebiet und führt zu Orten der Erfrischung: zu Parks, Schwimmbädern, Brunnen und Spielplätzen.",
      },
      {
        title: "Datengrundlage",
        content:
          "...",
      },
    ],
  },
  filter: {
    title: "Filter und Suche",
    filter: [
      {
        id: "OBJARTNAME",
        component: "tags",
        label: "Orte",
      },
    ],
  },
  tooltip: [
    {
      id: "NAMENR",
      component: "title",
      label: "Bezeichnung",
    },
    {
      id: "OBJARTNAME",
      component: "description",
      label: "Objektart",
    },
  ],
};
