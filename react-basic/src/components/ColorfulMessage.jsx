import React from 'react';

const ColorfulMessage = (props) => {
  const {color, children} = props;
  const contentStyle = {
    // jsはオブジェクトのプロパティ名と渡す名前が同じ場合は省略して記述できる
    // color: color,
    color,
    fontSize: '18px',
  };

  return (
      <p style={contentStyle}>{ children }</p>
  );
}

export default ColorfulMessage;