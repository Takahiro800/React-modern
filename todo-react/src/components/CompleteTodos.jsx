import React from 'react';

export const CompleteTodos = (props) => {
  const {todos, onClickBack} = props
  return (
      <div className="completeArea">
        <p>完了済のTODO</p>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={todo} className="listItem">
                <p className="listTitle">{todo}</p>
                <button onClick={ () => {onClickBack(index)} } >戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
  )
}