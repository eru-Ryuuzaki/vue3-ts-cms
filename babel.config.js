module.exports = {
  plugins: [
    [
      // 文件路径替换失败。哭了
      // 新版的组件名和css位置都变了
      // "import",
      // {
      //   libraryName: "element-plus",
      //   customStyleName: (name) => {
      //     return `element-plus/theme-chalk/${name}.css`;
      //   },
      //   customName: (name) => {
      //     return `element-plus/lib/components/${name.slice(3)}`;
      //   }
      // }

      "import",
      {
        libraryName: "element-plus",
        customStyleName: (name) => {
          return `element-plus/lib/theme-chalk/${name}.css`;
        }
      }
    ]
  ],
  presets: ["@vue/cli-plugin-babel/preset"]
};
