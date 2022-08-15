# 更新记录

## 220812
- 新增 tailwindCSS 
- pnpm i -D tailwindcss@latest postcss@latest autoprefixer@latest -w
## 220713
- "fix": "git pull origin master && git checkout -b hotfix/`date +%Y%m%d`"
  npm run fix 通过命令行自动新增修复分支

## 220710
- https://github.com/vuejs/vue-router/issues/3379
  useRouter must be called inside setup
## 220707
- 提示 找不到模块“src/router/index”或其相应的类型声明 
  添加 shims-vue.d.ts 文件来声明配置方式
## 220706
- 删除多余文件 / 改为 monorepo / 使用 pnpm 进行包管理
- pnpm init vite proj 进行项目初始化
- 根目录创建 pnpm-workspace.yaml 文件，可以帮助我们在安装公共依赖的情况下，也将 packages 目录下的项目所需的依赖同时进行安装
- 局部安装依赖
  1. 从根目录切到子项目的目录 直接 pnpm i element-plus
  2. 使用 --filter 参数在根目录直接安装 pnpm i element-plus --filter ssmispc
- 全局安装加参数 -w  pnpm i moment -w
- 参考文章 https://juejin.cn/post/7077168840806760478
- 配置 alias 参数的时候会提示 [ TS，找不到名称“__dirname”。ts(2304)]
  需要装一下 @types/node 包 
  pnpm add @types/node --save-dev -w
```js
alias: {
  "@": `${path.resolve(__dirname, 'src')}`,
  "pages": `${path.resolve(__dirname, 'src/pages')}`
}
``` 
- vscode 保存文件卡死 
  https://github.com/microsoft/vscode/issues/93080
  是否是你同时开启了editor.formatOnSave 和 editor.codeActionsOnSave， 我怀疑如果你只要eslint的话 ，只要开启editor.codeActionsOnSave就可以了。这样就不会去走Vetur的情况
- vscode 小技巧 批量转换大小写 首字母大写
  ctrl+shift+P  Lower Upper Title
