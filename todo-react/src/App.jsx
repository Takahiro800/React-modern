import React, {useState} from "react";
import './App.css';

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["あああああ","いいいいいいい"]);
  const [completeTodos, setCompleteTodos] = useState(["ううううう"])

  return (
    <>
      <div className="inputArea">
        <input placeholder="TODOを入力"/>
        <button>追加</button>
      </div>
      <div className="incompleteArea">
        <p>未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <li key={todo} className="listItem">
                <p className="listTitle">{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="completeArea">
        <p>完了済のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <li key={todo} className="listItem">
                <p className="listTitle">{todo}</p>
                <button>戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
