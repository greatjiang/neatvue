import Toast from "./src/Toast";

Toast.install = function(Vue) {
  Vue.component(Toast.name, Toast);
};
export default Toast;
