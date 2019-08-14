<template>
  <div class="rank-wrapper">
    <ul class="rank-list">
      <li
        v-for="(item, index) in rankList"
        :key="item + index"
        @click="handleClick"
        :style="{
          background: styleFilter(fillStyle, index),
          height: childHeight + 'vh',
          lineHeight: childHeight + 'vh'
        }"
      >
        <div class="rank-no">{{ index + 1 }}</div>
        <div class="rank-avatar-bg">
          <img class="rank-avatar" :src="item.avatar" />
        </div>
        <div class="rank-username ellipsis">{{ item.username }}</div>
        <div class="rank-score">{{ item.score }}</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "H5RankList",
  props: {
    rankList: {
      Type: Array,
      default: function() {
        return [];
      }
    },
    fillStyle: {
      Type: Array,
      default: function() {
        return ["#eee"];
      }
    },
    childHeight: {
      type: Number,
      default: 10
    }
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
    styleFilter(val, index) {
      if (val.length === 1) {
        return val[0];
      } else {
        if (index % 2 === 0) {
          return val[0];
        } else {
          return val[1];
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

.rank-title {
  width: 100%;
  height: 80px;
  line-height: 80px;
  font-size: 0;
  background: yellow;
}

.rank-title > li {
  display: inline-block;
  height: 80px;
  line-height: 80px;
  vertical-align: middle;
  font-size: 28px;
  text-align: center;
}

.rank-list {
  width: 100%;
  line-height: 150px;
  font-size: 0;
}

.rank-no {
  width: 100px;
  height: 50px;
  line-height: 50px;
  color: #ab4716;
  font-size: 30px;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
}

.rank-avatar-bg {
  width: 120px;
  height: 120px;
  line-height: 120px;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
}

.rank-avatar {
  width: 100px;
  height: 100px;
  line-height: 100px;
  display: inline-block;
  vertical-align: middle;
  border-radius: 50%;
}

.rank-username {
  width: 260px;
  height: 120px;
  line-height: 120px;
  display: inline-block;
  vertical-align: middle;
  font-size: 26px;
  color: #ab4716;
}

.ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.rank-score {
  width: 260px;
  height: 120px;
  line-height: 120px;
  font-size: 26px;
  color: #ab4716;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
}
</style>
