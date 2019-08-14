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
    <div>我是榜单我要开始展示了...</div>
    <h5-rank-list
      :rankList="rankList"
      :fill-style="['red', 'yellow']"
      :child-height="10"
      @click="goHomepage"
    ></h5-rank-list>
    <div>我是榜单2我要开始展示了...</div>
    <div class="rank2-bg">
      <h5-rank-section
        :rankList="rankList"
        :fill-style="['blue', 'yellow']"
        :child-height="20"
        @click="goHomepage"
      >
        <template v-slot:no="{ index }">
          <div class="rank-index">
            {{ index + 1 }}
          </div>
        </template>
        <template v-slot:avatar="{ item }">
          <img class="rank-avatar" :src="item.avatar" />
        </template>
        <template v-slot:mes="{ item }">
          <div class="rank-mes">
            {{ item.username }}
          </div>
        </template>
        <template v-slot:val="{ item }">
          <div class="rank-val">
            {{ item.score }}
          </div>
        </template>
      </h5-rank-section>
    </div>
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
      layerShowFlag: false,
      rankList: [
        {
          username: "你好",
          avatar: require("../assets/images/me.jpeg"),
          score: "10000"
        },
        {
          username: "我好",
          avatar: require("../assets/images/me.jpeg"),
          score: "10000"
        }
      ]
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
    },
    goHomepage() {
      window.location.href = "https://www.baidu.com";
    }
  }
};
</script>

<style lang="scss" scoped>
.rank-index {
  font-size: 30px;
  color: #121212;
  width: 80px;
  height: 50px;
  line-height: 50px;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
}
.rank-avatar {
  width: 100px;
  height: 100px;
  line-height: 100px;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
}
.rank-mes {
  width: 200px;
  height: 50px;
  line-height: 50px;
  display: inline-block;
  vertical-align: middle;
  font-size: 30px;
  padding-left: 20px;
  box-sizing: border-box;
}
.rank-val {
  width: 300px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  font-size: 30px;
}
.rank2-bg {
  width: 100%;
  background: rgb(49, 195, 231);
}
</style>
