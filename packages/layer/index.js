import Layer from "./src/Layer.vue";

Layer.install = function(Vue) {
  Vue.component(Layer.name, Layer);
};
export default Layer;
