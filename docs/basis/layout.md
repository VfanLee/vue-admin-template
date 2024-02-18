# 布局

vue3-admin-template 封装了一套基础布局，放在了 `layout` 中，目录结构如下：

```sh
├── layout
│   ├── AppMain                   # 页面主内容
│   ├── GlobalBtn                 # 全局按钮
│   ├── Navbar                    # 导航栏
│   ├── PageFooter                # 页脚
│   ├── Sidebar                   # 侧边栏
│   ├── index.vue                 # layout 根组件
│   └── settings.js               # layout 配置
├── stores
│   └── app.js                    # layout 状态管理
└── styles
    └── layout.scss               # layout 样式
```

1. 整体采用 flex 布局。

    最外层采用左右布局（即 Sidebar + Main），Sidebar 采用上中下布局（即 Logo + Menu + Btn），Main 采取上中下布局（即 Navbar + AppMain + Footer）。

    固定内容如 Sidebar、Navbar …… 设置为 `flex-shirk: 0` 来禁止收缩，自适应内容设置为 `flex: 1`。

    由于是 flex 布局，当 Sidebar 设置 `min-height: 100vh` 时，Main 高度会自动自适应。

2. Sidebar 如何控制固定？

    Tips：当元素设置为 `position: fixed` 时，`width: 100%` 为视口宽度。
      当父容器的宽度固定时，内层容器设置 `position: fixed; width: inherit;` 可以继承父容器的宽度。

    Sidebar 外层设置固定宽度，在内层包裹一层容器，其目的就是即使内层设置了 `position: fixed`，依然能通过 `width: inherit` 来继承 **父容器** 的宽度。

3. Sidebar 如何控制宽度？

    Sidebar 可以根据不同的类名，如：`is-collapse`, `is-hide` 来对宽度进行切换。

4. Navbar 如何控制固定？固定之后宽度失效？

    当我们沿用 Sidebar 的思路来设置固定效果时，会发现宽度失效，其原因就是 `flex: 1` 不是一个明确的宽度，`width: inherit` 无法继承 **父容器** 的宽度，所以在处理 Navbar 时，宽度需要通过 js 来动态设置。

    并且还需要考虑，当 Navbar 为定位元素的时候，脱离标准流，高度会失效，AppMain 的内容显示问题。
