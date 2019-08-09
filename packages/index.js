import Toast from "./toast";
import Layer from "./layer";
import MessageBox from "./messagebox";
import Loading from "./loading";
import "normalize.css";
import "./common.scss";

const components = [Toast, Layer, MessageBox, Loading];

const install = function(Vue) {
  if (install.installed) return;
  components.forEach(item => {
    Vue.component(item.name, item);
  });
};

export default install;
