- todolist
  - node_modules —————————— 项目依赖的第三方的包
  * public ———————————————— 共用文件
    - favicon.ico —— 网页标签左上角小图标
    - index.html —— 网站首页模板
    - mainfest.json —— 提供 meta 信息给项目，并与 serviceWorker.js 相呼应，进行离线 APP 定义
  * src ——————————————————— 项目主要目录
    - app \_\_ hooks函数
    - pages \_\_ 页面
    - store \_\_ 数据仓库
    - App.css —— 主组件样式
    - App.tsx —— 主组件入口
    - index.css —— 全局 css 文件
    - main.tsx —— 所有代码的入口
  * .gitignore ———————————— 配置文件。git 上传的时候忽略哪些文件
  * package-lock.json ————— 锁定安装包的版本号，保证其他人在 npm i 的时候使用一致的 node 包
  * package.json —————————— node 包文件，介绍项目以及说明一些依赖包等
  * README.md ————————————— 项目介绍文件
