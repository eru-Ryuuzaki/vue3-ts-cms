import { createApp } from "vue";
import App from "./App.vue";
// 文件夹下的 index 文件可以省略，会自己去找
import { globalRegister } from "./global";

// 全局引入
// import ElementPlus from "element-plus";
// // 记得引入样式
// import "element-plus/theme-chalk/index.css";

import router from "./router";
import store from "./store";

const app = createApp(App);

// globalRegister(app);
app.use(globalRegister); // 默认执行 globalRegister 并且传入 app

app.use(router);
app.use(store);
// app.use(ElementPlus);
app.mount("#app");
