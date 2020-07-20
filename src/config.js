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
      id: "art_angebot",
    },
    title: "Name des Projekts hier",
    paragraphs: [
      {
        title: "Subheadline hier",
        content:
          "Lorem ipsum [dolorem](https://www.google.de) est. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
      {
        title: "Subheadline hier",
        content:
          "Lorem ipsum [dolorem](https://www.google.de) est. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
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
        id: "zielgruppe_themenspezifisch",
        component: "tags",
        label: "Zielgruppe Themenspezifisch",
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
