# 更新记录

## 220706
- 删除多余文件 / 改为 monorepo / 使用 pnpm 进行包管理
- pnpm init vite proj 进行项目初始化
- 根目录创建 pnpm-workspace.yaml 文件，可以帮助我们在安装公共依赖的情况下，也将 packages 目录下的项目所需的依赖同时进行安装
- 局部安装依赖
  1. 从根目录切到子项目的目录 直接 pnpm i element-plus
  2. 使用 --filter 参数在根目录直接安装 pnpm i element-plus --filter ssmispc
- 全局安装加参数 -W  pnpm i moment -W
- 参考文章 https://juejin.cn/post/7077168840806760478
