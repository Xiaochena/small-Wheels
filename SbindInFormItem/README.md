# SbindInFormItem

为了再 Antd 的 Form 下能使用 Spin，

具体使用方法是类似这样

```jsx
<Form.Item>
  <SbindInFormItem spinning={loading}>
    <Input disabled placeholder="请输入店铺ID" />
  </SbindInFormItem>
</Form.Item>
```

#### 1.`SbindInFormItem`可以单独对一个组件的 `lading` 状态进行设置，并且不影响 Form.item 对`Input`的赋值等操作
#### 2.Form 的`value`和`onChange`会被绑定到`SbindInFormItem`的`Children`，也就是上面例子的`Input`上。而`SbindInFormItem`上的参数会被绑定到 Antd 的`Sbind`上，`SbindInFormItem`的参数和`Antd`的`Sbind`相同，
