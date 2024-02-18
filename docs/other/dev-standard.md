# 项目规范

> 注：个人习惯，非标准

## 通用组件

### 组件命名

采取大驼峰命名。

```sh
|-- components
  |-- AaaBbb.vue
  |-- BbbCcc
    |-- index.vue
```

### 组件使用

```vue
<AaaBbb></AaaBbb>
<BbbCcc />
```

## 路由

### 路由表命名

- `path` 使用烧烤串来命名。
- `component` 使用大驼峰来命名。
- `name` 使用大驼峰来命名。

```js
{
  path: '/aaa-bbb',
  component: AaaBbb,
  name: 'AaaBbb'
}
```

### 路由组件命名

使用烧烤串命名。

```sh
|-- views
  |-- aaa-bbb.vue
  |-- bbb-ccc
    |-- index.vue
```

### 路由组件的使用

```vue
<aaa-bbb></aaa-bbb>
<aaa-bbb />
```
