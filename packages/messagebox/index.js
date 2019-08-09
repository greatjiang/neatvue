import MessageBox from "./src/MessageBox.vue";

MessageBox.install = function(Vue) {
  Vue.component(MessageBox.name, MessageBox);
};
export default MessageBox;
