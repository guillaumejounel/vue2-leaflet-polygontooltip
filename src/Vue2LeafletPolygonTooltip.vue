<template>
  <div style="display: none;"><slot v-if="ready" /></div>
</template>

<script>
import L from "leaflet";
import { LPolygon, propsBinder, findRealParent } from "vue2-leaflet";

const props = {
  tooltip: {
    type: String,
    default: null
  },
  latLngs: {
    type: Array,
    default: () => []
  },
  hoverProperties: {
    type: Object,
    default: () => ({})
  }
};

export default {
  name: "polygontooltip",
  mixins: [LPolygon],
  props,
  data() {
    return {
      ready: false
    };
  },
  mounted() {
    this.mapObject.bindTooltip(this.tooltip, { sticky: true });
    L.DomEvent.on(this.mapObject, this.$listeners);
    propsBinder(this, this.mapObject, props);
    this.ready = true;
    this.parentContainer = findRealParent(this.$parent);
    this.parentContainer.addLayer(this, !this.visible);
    this.$nextTick(() => {
      this.$emit("ready", this.mapObject);
    });
    const initialProperties = { ...this.mapObject.options };
    this.mapObject.on("mouseover", () => {
      this.mapObject.options = {
        ...this.mapObject.options,
        ...this.hoverProperties
      };
      this.mapObject._renderer._updateStyle(this.mapObject);
    });
    this.mapObject.on("mouseout", () => {
      this.mapObject.options = { ...initialProperties };
      this.mapObject._renderer._updateStyle(this.mapObject);
    });
  },
  beforeDestroy() {
    this.parentContainer.removeLayer(this);
  }
};
</script>
