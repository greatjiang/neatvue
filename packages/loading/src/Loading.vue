<template>
  <div class="loading-wrapper" v-show="showFlag">
    <img src="./loading.svg" alt="loading..." />
  </div>
</template>
<script>
export default {
  name: "H5Loading",
  props: {
    showFlag: Boolean
  }
};
</script>
<style lang="scss">
.loading-wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -100px;
  border-radius: 8px;
  width: 200px;
  height: 200px;
  background: rgba(0, 0, 0, 0.5);
}
</style>
