import React, {useState} from "react";
import './App.css';
import {InputTodo} from './components/inputTodo';
import { IncompleteTodos } from './components/incompleteTodos';
import {CompleteTodos} from './components/CompleteTodos'

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
      <InputTodo todoText={todoText} onChange = {onChangeTodoText} onClick={onClickAdd} />
      <IncompleteTodos incompleteTodos={incompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
}
