# vue2-leaflet-polygontooltip

This is a polygontooltip extension for [vue2-leaflet package](https://github.com/KoRiGaN/Vue2Leaflet)

## Install

    npm install --save vue2-leaflet-polygontooltip

## Demo

Coming soon

## Usage

In `main.js`:

    import polygontooltip from "vue2-leaflet-polygontooltip";
    ...
    Vue.use(polygontooltip);

In your component:

    <l-polygon-tooltip
      :lat-lngs="coordinates"
      ...
      tooltip="my tooltip"
      :hoverProperties="{ opacity: 0.5, ... }"
    />

- `tooltip` can be any text
- `hoverProperties` is an object of properties applied to the hovered polygon.

## Author

[Guillaume Jounel](https://github.com/guillaumejounel/)

## License

MIT
polygon fillpattern plugin extension for vue2-leaflet package
