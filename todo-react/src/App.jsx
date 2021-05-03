import React from "react";
import './App.css';

export const App = () => {
  return (
    <>
      <div className="inputArea">
        <input placeholder="TODOを入力"/>
        <button>追加</button>
      </div>
      <div className="incompleteArea">
        <p>未完了のTODO</p>
        <ul>
          <li className="listItem">
            <p className="listTitle">aaaa</p>
            <button>完了</button>
            <button>削除</button>
          </li>
          <li className="listItem">
            <p className="listTitle">iiiiiiiiiiii</p>
            <button>完了</button>
            <button>削除</button>
          </li>
        </ul>
      </div>
      <div className="completeArea">
        <p>完了済のTODO</p>
        <ul>
          <li className="listItem">
            <p className="listTitle">aaaa</p>
            <button>戻す</button>
          </li>
        </ul>
      </div>
    </>
  );
}
