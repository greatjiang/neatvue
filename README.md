# neatvue

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

功能测试中