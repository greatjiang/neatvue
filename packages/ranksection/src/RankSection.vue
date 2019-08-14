<template>
  <ul class="rank-wrapper">
    <li
      v-for="(item, index) in rankList"
      :key="item + index"
      @click="to"
      :style="{
        background: styleFilter(fillStyle, index),
        height: childHeight + 'vh',
        lineHeight: childHeight + 'vh'
      }"
    >
      <slot name="no" :item="item" :index="index"></slot>
      <slot name="avatar" :item="item"></slot>
      <slot name="mes" :item="item"></slot>
      <slot name="val" :item="item"></slot>
    </li>
  </ul>
</template>
<script>
export default {
  name: "H5RankSection",
  props: {
    rankList: {
      Type: Array,
      default: []
    },
    fillStyle: {
      Type: Array,
      default: function() {
        return ["#fff"];
      }
    },
    childHeight: {
      type: Number,
      default: 10
    }
  },
  methods: {
    to() {
      this.$emit("to");
    },
    styleFilter(val, index) {
      if (val.length === 1) {
        return { background: val[0] };
      } else {
        if (index % 2 === 0) {
          return { background: val[0] };
        } else {
          return { background: val[1] };
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.rank-wrapper {
  width: 100%;
  margin: 0 auto;
}
.rank-wrapper > li {
  width: 100%;
  height: 120px;
  line-height: 120px;
  font-size: 0;
}
</style>
