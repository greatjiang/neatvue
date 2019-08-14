## Project setup
```
npm install neatvue --save
```

## 需要结合 amfe-flexible使用
> npm install amfe-flexible --save
```
import "amfe-flexible";
import "neatvue/lib/neatvue.css";
import Neatvue from "neatvue";
```

## layer
> 只是一个遮罩
```
  <h5-layer :show-flag.sync="layerShowFlag">
    <div></div>  // 想放置的内容
  </h5-layer>
```

## loading
```
<h5-loading :show-flag.sync="loadingShowFlag"></h5-loading>
```

## messagebox
> box-type 类型默认confirm    支持confirm/alert
> content 消息内容 string
> @confirm 确认后的执行
```
<h5-message-box :show-flag.sync="alertShowFlag" :content="'你想让我弹什么？'" @confirm="alertAction" :box-type="'alert'">
</h5-message-box>
```

## toast
> content 内容 string
> timeout 时间 默认2500
```
<h5-toast :show-flag.sync="toastShowFlag" :content="toastContent"></h5-toast>
```

## ranklist
> rankList 榜单数据  item {avatar,username,score}
> fill-style 隔行换色 最多两个值 默认#eee
> child-height  li 高度 单位vh number类型
```
<h5-rank-list
  :rankList="rankList"
  :fill-style="['red', 'yellow']"
  :child-height="10"
  @click="goHomepage"
></h5-rank-list>
```

## ranksection
> rankList 榜单数据  item {avatar,username,score}
> fill-style 隔行换色 最多两个值 默认#eee
> child-height  li 高度 单位vh number类型
> slot:  no、avatar、mes、val
```
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
```

功能测试中