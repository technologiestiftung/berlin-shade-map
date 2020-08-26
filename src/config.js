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
          "Die genutzten Daten stammen von <a href='https://fbinter.stadt-berlin.de/fb/index.jsp' target='_blank' rel='noopener noreferrer'>FIS-Broker Berlin</a> und von <a href='https://www.berlin.de/' target='_blank' rel='noopener noreferrer'>berlin.de</a>. Die Simulation der Schatten basiert auf Höhendaten von Gebäuden und Objekten und der Sonnenstrahlung im Monat Juli. Diese Karte ist ein Open-Source-Projekt und der <a href='https://github.com/technologiestiftung/berlin-shade-map' target='_blank' rel='noopener noreferrer'>Quellcode</a> auf GitHub verfügbar.",
      },
      {
        title: "",
        content:
          "<a href='https://www.technologiestiftung-berlin.de/de/impressum/' target='_blank' rel='noopener noreferrer'>Impressum</a> | <a href='https://www.technologiestiftung-berlin.de/de/datenschutz/' target='_blank' rel='noopener noreferrer'>Datenschutz</a>",
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
  cookies: {
    text: "Diese Webseite verwendet Cookies, um bestimmte Funktionen zu ermöglichen und das Angebot zu verbessern. Indem du hier fortfährst stimmst du der Nutzung von Cookies zu.",
    link: {
      text: "Weitere Informationen",
      url: "https://www.technologiestiftung-berlin.de/de/datenschutz/"
    },
    cookie: "disclaimerAccepted=true;path=/;max-age=31536000;"
  },
};
