export default {
  socialTags: {},
  map: {
    mapCenter: [13.400033, 52.520952],
    mapZoom: [16],
    marker: {
      color: {
        selected: "green",
        default: "black",
      },
    },
    config: {
      minZoom: 12,
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
    shades: {
      tileSize: 256,
      bounds: [13.1,52.3,13.8,52.7],
      minZoom: 15,
      opacity: 0.45,
    }
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
          "Die genutzten Daten stammen von [FIS-Broker Berlin](https://fbinter.stadt-berlin.de/fb/index.jsp) und von [berlin.de](https://www.berlin.de/). Die Simulation der Schatten basiert auf Höhendaten von Gebäuden und Objekten und der Sonnenstrahlung im Monat Juli. Diese Karte ist ein Open-Source-Projekt und der [Quellcode](https://github.com/technologiestiftung/berlin-shade-map) auf GitHub verfügbar.",
      },
      {
        title: "",
        content:
          "[Impressum](https://www.technologiestiftung-berlin.de/de/impressum/) | [Datenschutz](https://www.technologiestiftung-berlin.de/de/datenschutz/)",
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
