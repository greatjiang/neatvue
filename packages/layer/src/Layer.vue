<template>
  <div class="layer-wrapper" v-show="showFlag" @click="close">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "H5Layer",
  props: {
    showFlag: Boolean
  },
  methods: {
    close(e) {
      if (e.target.className !== "layer-wrapper") {
        return;
      }
      this.$emit("update:showFlag", false);
    }
  }
};
</script>
<style lang="scss">
.layer-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
</style>
