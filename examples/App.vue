<template>
  <div id="app">
    <button @click="clickToast">
      我是Toast,你点我试试！
    </button>
    <h5-toast
      :show-flag.sync="toastShowFlag"
      :content="toastContent"
    ></h5-toast>
    <button @click="clickConfirm">
      我是Confirm,你点我试试！
    </button>
    <h5-message-box
      :show-flag.sync="confirmShowFlag"
      :content="confirmContent"
      @confirm="confirmAction"
    >
    </h5-message-box>
    <button @click="clickAlert">
      我是Alert,你点我试试！
    </button>
    <h5-message-box
      :show-flag.sync="alertShowFlag"
      :content="'你想让我弹什么？'"
      @confirm="alertAction"
      :box-type="'alert'"
    >
    </h5-message-box>
    <button @click="clickLoading">
      我是Loading,你点我试试！
    </button>
    <h5-loading
      :show-flag.sync="loadingShowFlag"
      :timeout="timeout"
    ></h5-loading>
    <button @click="clickLayer">
      我是Layer,你点我试试！
    </button>
    <h5-layer :show-flag.sync="layerShowFlag">
      <div></div>
    </h5-layer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      toastShowFlag: false,
      toastContent: "",
      confirmShowFlag: false,
      confirmContent: "",
      loadingShowFlag: false,
      timeout: 0,
      alertShowFlag: false,
      layerShowFlag: false
    };
  },
  methods: {
    clickLayer() {
      this.layerShowFlag = true;
    },
    clickAlert() {
      this.alertShowFlag = true;
    },
    alertAction() {
      this.alertShowFlag = false;
    },
    clickLoading() {
      this.loadingShowFlag = true;
      setTimeout(() => {
        this.loadingShowFlag = false;
      }, 1500);
    },
    confirmAction() {
      this.confirmShowFlag = false;
      this.toastShowFlag = true;
      this.toastContent = "不要脸~";
    },
    clickConfirm() {
      this.confirmShowFlag = true;
      this.confirmContent = "你确定你很帅吗？";
    },
    clickToast() {
      this.toastShowFlag = true;
      this.toastContent = "我点击了";
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
</style>
