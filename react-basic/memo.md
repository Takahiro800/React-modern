```jsx
  <h1 style={{ color:  }}>こんにちは</h1>
```

- 外の `{}`は「javascript を書くよ」の宣言
- 内の `{}`は「js のオブジェクト」のもの

# props について

コンポーネントに渡す引数のようなもの

- 設定の仕方は２種類ある

### props-1

props 渡す側

props の各名前（ここでの `color`や `message`）は何でも良い

```jsx
<ColorfulMessage color="pink" message="元気です!" />
```

props 受け取る側

```jsx
const ColorfulMessage = (props) => {
  const contentStyle = {
    color: props.color,
    fontSize: "18px",
  };

  return <p style={contentStyle}>{props.children}</p>;
};
```

オブジェクトとして渡す場合は、props 名を指定して `引数（ここではprops）.props名`

### props-2

HTML のテキストを渡す場合は `{props.children}`

# レンダリング is 何
