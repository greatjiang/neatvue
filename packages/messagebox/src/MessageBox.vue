<template>
  <div class="confirm-wrapper" v-show="showFlag">
    <div class="confirm-body">
      <div class="confirm-content">{{ content }}</div>
      <div class="confirm-btns">
        <a class="cancel-btn" @click="cancel" v-if="boxType !== 'alert'">
          取消
        </a>
        <a class="confirm-btn" @click="confirm">确认</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "H5MessageBox",
  props: {
    showFlag: Boolean,
    content: String,
    boxType: {
      type: String,
      default: "confirm"
    }
  },
  methods: {
    cancel() {
      this.$emit("update:showFlag", false);
    },
    confirm() {
      this.$emit("confirm");
    }
  }
};
</script>
<style lang="scss">
.confirm-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background: rgba(0, 0, 0, 0.5);
}

.confirm-body {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -165px;
  margin-left: -310px;
  width: 620px;
  height: 330px;
  border-radius: 8px;
  background: #fff;
}

.confirm-content {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  color: #444;
  width: 100%;
  height: 230px;
}

.confirm-btns {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  border-top: 1px solid #eee;
  box-sizing: border-box;
}

.confirm-btns > a {
  flex: 1;
  line-height: 100px;
  text-align: center;
  font-size: 32px;
  color: #121212;
}

.cancel-btn {
  border-right: 1px solid #eee;
  box-sizing: border-box;
}

.confirm-btns > .confirm-btn {
  color: #ff5046;
}
</style>
