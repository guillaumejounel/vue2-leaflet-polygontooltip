import PolygonTooltip from "./src/Vue2LeafletPolygonTooltip.vue";

export default {
  install(Vue, options) {
    Vue.component("l-polygon-tooltip", PolygonTooltip);
  }
};
