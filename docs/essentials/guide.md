# 介绍

## 运行项目

### 运行后端服务器

```sh
cd server
npm i
npm start
```

### 运行前端项目

```sh
cd vue3-admin-template
npm i
npm run dev
```

## 目录结构

```sh
├── public                     # 静态资源
│   └── favicon.ico            # favicon 图标
├── server                     # node.js 后端服务器
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── assets                 # 主题 字体等静态资源
│   ├── components             # 全局公用组件
│   ├── i18n                   # 国际化
│   ├── icons                  # 项目所有 svg icons
│   ├── lang                   # 国际化 language
│   ├── layout                 # 全局 layout
│   ├── router                 # 路由
│   ├── ├── modules            # 路由模块
│   ├── ├── └── ...
│   ├── ├── index.js           # 路由主配置
│   ├── ├── permission.js      # 权限管理
│   ├── └── routes.js          # 路由表
│   ├── stores                 # store
│   ├── ├── index.js           # store 主配置
│   ├── └── ...
│   ├── styles                 # 全局样式
│   ├── utils                  # 全局公用方法
│   ├── views                  # 路由组件
│   ├── App.vue                # 根组件
│   └── main.js                # 主入口配置
├── index.html                 # 主入口页面
├── jsconfig.json              # jsconfig.json
├── package-lock.json          # package-lock.json
├── package.json               # package.json
├── README.md                  # README
└── vite.config.js             # vite 配置
```
