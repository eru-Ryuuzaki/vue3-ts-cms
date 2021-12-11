import "element-plus/lib/theme-chalk/base.css";
import { App } from "vue";
// 局部引入
import {
  ElAlert,
  ElAside,
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio
} from "element-plus";
const components = [
  // 文件夹下面没有 src 文件的话好像不能引入
  ElAlert,
  ElAside,
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio
];

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component);
  }
}
