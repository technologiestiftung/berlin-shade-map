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
      id: "OBJART_TXT",
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
  fav: {
    title: "Favoriten",
  },
  filter: {
    title: "Filter und Suche",
    filter: [
      {
        id: "OBJART_TXT",
        component: "tags",
        label: "Art des Features",
      },
      {
        id: "angebote",
        component: "tags",
        label: "Angebote",
      },
    ],
  },
  tooltip: [
    {
      id: "name",
      component: "title",
      label: "Institution",
    },
    {
      id: "art_angebot",
      component: "description",
      label: "Angebot",
    },
  ],
  detail: [
    {
      id: "name",
      component: "title",
      label: "Institution",
    },
    {
      id: "art_angebot",
      component: "description",
      label: "Angebot",
    },
    {
      id: "bezeichnung",
      component: "description",
      label: "Bezeichnung",
    },
    {
      id: "email",
      component: "link",
      label: "E-Mail",
    },
    {
      id: "adresse",
      component: "description",
      label: "Adresse",
    },
    {
      id: "angebote",
      component: "tags",
      label: "Angebote",
    },
    {
      id: "zielgruppe_themenspezifisch",
      component: "tags",
      label: "Zielgruppen",
    },
  ],
};
