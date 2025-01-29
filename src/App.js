import React from 'react';
//import './App.css';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import Button from './components/Button';
import CounterComponent from './components/CounterComponent';

import './style.css';

const App = () => {
  return(
    <div className="todo-container">
      <CounterComponent/>
      <Header text="Todo List" />
      <TodoItem text="Eat"/>
      <TodoItem completed={true} text="Code"/>
      <TodoItem text="Play"/>
      <TodoItem text="Study"/>
      <Button text=""/>
    </div>
  );
};

export default App;
