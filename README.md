# Mapbox React Filterable Map Boilerplate

> This project serves as a template to plot spatial data on a map.

This template is build with React and Mapboxgl.js.

## Getting started

Add a ```.env``` file with your mapbox token and style credentials in the root directory. Register at mapbox to get an access token. Add the following information:

```
REACT_APP_MAP_TOKEN={{MAPBOX_TOKEN}}
REACT_APP_MAP_STYLE={{MAPBOX_STYLE_URL}}
```

## How to setup the project

In order to get things running clone this repo to your machine and install all dependencies with ```npm i```.
The map expects data as a ```geojson``` format. Place your data in ```public/data/``` directory. It's expected to be named as ```data.geojson```.

Inside the root directory you find the ```config.js```. Here you are obliged to define *what* and *how* properties of your geojson are displayed.

It is necessary to define the following sections inside your ```config.js```:

## How is the config.js structured?

### Mapbox settings
The ```map``` key sets the style, default center of map, zoom level, min zoom, max zoom and others and can be edited here.

> It isn't required to change anything here to run the map.

```
map: {
  mapCenter: [13.4124999, 52.5040961], // points towards Berlin
  mapZoom: [10],
  ...
}
```

### Sidebar: About
The about section of the app consists of a ```legend```, a ```title``` and a number of ```paragraphs``` you want to show to.

#### Legend
Based on the properties of each feature of your dataset you define what property should be distincted by color. Set the key ```id``` of the object ```legend``` in your config as one of the existing props in your dataset. For example:

```
// data.geojson
{
  "type": "FeatureCollection",
  "features": [
      {
        "type": "Feature",
        "geometry": ...
        "properties": {
            "some_property": 'nominal_value',
            ...
        }
      }
  ]
}

// config.js
about: {
  legend: {
    id: 'some_property'
  }
}
```

#### Title & paragraphs
Set the content of title and paragraphs of the about section. Set the ```value``` of the key ```title``` to define the title of the about section. 

To set content for paragraphs you add an ```object``` inside the array of the key ```paragraphs``` which contains two ```keys```: ```title``` and ```content``` and fill these with your text. You can also use the markdown syntax in your paragraphs to place links or emphasize parts.

```
about: {
  ...
  paragraphs: [
    {
      title: "Your paragraph title",
      content: "Lorem ipsum [dolorem](https://www.google.de) est. Ut **enim** ad *minima* veniam, quis nostrum"
    },
    ...
  ]
}
```

### Sidebar: Favorites
Set the content of title of the favorites section. Set the ```value``` of the key ```title``` to define the title.

```
fav: {
  title: 'Favorites'
}
```

### Sidebar: Filter
Define the properties of your dataset you want to be filterable and set a ```title``` for this section. The ```filter``` key expects an array of ```objects```. Each object defines one filter which helps you to show/hide datapoints with the defined property on your map. You are expected to provide an ```id```, the name of the ```component``` and a ```label``` to describe the filter. The ```id``` has to match with one of the properties of your dataset (exactly like the configuration of the legend, mentioned above). Currently the value of the key ```component``` has to be "tags". Make a title you prefer as the value of the ```label``` key.

> If you want to create your own components to filter the data in a new way, feel free to do so. Have a look at ```src/components/Card/Card.js``` to see how the selection of components is implemented. With the logic with the ```switch``` statement in src/modules/Sidebar/SidebarFilter.

```
// data.geojson
{
  "type": "FeatureCollection",
  "features": [
      {
        "type": "Feature",
        "geometry": ...
        "properties": {
            "another_property": 'nominal_value',
            ...
        }
      }
  ]
}

// config.js
filter: {
  title: 'Filter and Search',
  filter: [
    {
      id: "another_property",
      component: "tags",
      label: "Title of the filter here"
    },
    ...
  ]
},
```

### Tooltip (on the map)
Define what properties of your data shall be displayed inside the tooltip on the map. ```tooltip``` expects an ```array``` of ```objects```. You are expected to provide an ```id```, the name of the ```component``` and a ```label``` to describe the component.

Currently you can choose between ```title``` and ```description``` as a component to display your information.

> Feel free to place as many components as you want in the array. In this case we display a title and description of a data point.

```
// data.geojson
{
  "type": "FeatureCollection",
  "features": [
      {
        "type": "Feature",
        "geometry": ...
        "properties": {
            "title": 'Some title',
            "description": 'Description here',
            ...
        }
      }
  ]
}

// config.js
...
tooltip: [
  {
    id: "name",
    component: "title",
    label: "Title",
  },
  {
    id: "description",
    component: "description",
    label: "Description",
  }
],
...
```

### Detail View
If you click on a data point on the map a more detailed view is displayed in the sidebar. At the key ```detail``` you define what properties are visible. You are expected to provide an ```id```, the name of the ```component``` and a ```label``` to describe the component.

Currently you can choose between ```title```, ```description```, ```link```, ```tags``` as a layout-component to display your information.

> Feel free to implement more custom components to this section. Just make sure to import newly created components to the Card Component at ```src/components/Card/Card.js``` and add the switch conditional to make them available.

```
// data.geojson
{
  "type": "FeatureCollection",
  "features": [
      {
        "type": "Feature",
        "geometry": ...
        "properties": {
            "title": 'Some title',
            "description": 'Description here',
            "email": 'Email here',
            "category": 'categorical data'
        }
      }
  ]
}

// config.js
...
detail: [
  {
    id: "name",
    component: "title",
    label: "Institution",
  },
  {
    id: "description",
    component: "description",
    label: "Description",
  },
  {
    id: "email",
    component: "link",
    label: "E-Mail",
  },
  {
    id: "category",
    component: "tags",
    label: "Category",
  },
  ...
],
...
```

## Commands

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
