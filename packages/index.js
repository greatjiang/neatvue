import "amfe-flexible";
import "../styles/common.scss";
import Toast from "./toast";
import Layer from "./layer";
import MessageBox from "./messagebox";
import Loading from "./loading";
import RankList from "./ranklist";
import RankSection from "./ranksection";

const components = [Toast, Layer, MessageBox, Loading, RankList, RankSection];

const install = function(Vue) {
  if (install.installed) return;
  components.forEach(item => {
    Vue.component(item.name, item);
  });
};

export default install;
