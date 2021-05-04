import React from 'react';

export const IncompleteTodos = (props) => {
  const { incompleteTodos, onClickComplete, onClickDelete } = props;
  return (
      <div className="incompleteArea">
        <p>未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <li key={todo} className="listItem">
                <p className="listTitle">{todo}</p>
                <button onClick={() => {onClickComplete(index) }}>完了</button>
                <button onClick={() => { onClickDelete(index) }}>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
  )
}