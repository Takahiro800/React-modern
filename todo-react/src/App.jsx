import React, {useState} from "react";
import './App.css';

export const App = () => {
  const [todoText, setTodoText] = useState('')
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (evnet) => setTodoText(evnet.target.value);

  const onClickAdd = () => {
    if (todoText){
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");}
  }
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }

  const onClickComplete = (index) => {
    const newTodos = [...incompleteTodos];
    const newComplete = [...completeTodos, newTodos[index]];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
    setCompleteTodos(newComplete);
  }

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  }

  return (
    <>
      <div className="inputArea">
        <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText}/>
        <button onClick={onClickAdd}>追加</button>
      </div>
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
      <div className="completeArea">
        <p>完了済のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <li key={todo} className="listItem">
                <p className="listTitle">{todo}</p>
                <button onClick={ () => {onClickBack(index)} } >戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
