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
      id: "type",
    },
    title: "Berliner Erfrischungskarte",
    paragraphs: [
      {
        title: "Worum geht's hier?",
        content:
          "In der Sommerzeit gibt es besonders morgens und mittags starke Sonneneinstrahlung. Diese Karte zeigt Schattenbereiche im Berliner Stadtgebiet und führt zu Orten zum Erfrischen und Verweilen.",
      },
      {
        title: "Datengrundlage",
        content:
          "Die genutzten Daten stammen von [FIS-Broker Berlin](https://fbinter.stadt-berlin.de/fb/index.jsp) und von [berlin.de](https://www.berlin.de/). Diese Karte ist ein Open-Source-Projekt und der [Quellcode](https://github.com/technologiestiftung/berlin-shade-map) auf GitHub verfügbar.",
      },
    ],
  },
  filter: {
    title: "Filter und Suche",
    filter: [
      {
        id: "type",
        component: "tags",
        label: "Orte",
      },
    ],
  },
  tooltip: [
    {
      id: "name",
      component: "title",
      label: "Bezeichnung",
    },
    {
      id: "type",
      component: "description",
      label: "Objektart",
    },
    {
      id: "address",
      component: "description",
      label: "Adresse",
    },
  ],
};
