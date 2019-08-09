<template>
  <div class="toast-wrapper" v-show="showFlag">
    {{ content }}
  </div>
</template>
<script>
export default {
  name: "H5Toast",
  props: {
    showFlag: Boolean,
    content: String,
    timeout: {
      type: Number,
      default: 2500
    }
  },
  watch: {
    showFlag(newValue) {
      if (newValue) {
        setTimeout(() => {
          this.$emit("update:showFlag", false);
        }, this.timeout);
      }
    }
  }
};
</script>
<style lang="scss">
.toast-wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -25px;
  margin-left: -250px;
  width: 500px;
  height: 100px;
  line-height: 32px;
  color: #fff;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0.2rem;
}
</style>
