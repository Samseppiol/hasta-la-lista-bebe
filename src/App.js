import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Checkbox from './components/Checkbox'
import Field from './components/Field'
import TodoItem from './components/TodoItem'

import TodoList from './components/TodoList'

const exampleTodoItems = [
  {
    completed: false,
    description: 'Incomplete item'
  },
  {
    completed: true,
    description: 'Complete item'
  },
  {
    completed: true,
    description: 'Lorem ipsum'
  }
]

class App extends Component {
  render() {
    return (
      <main>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hasta la lista bebe</h2>
        </div>

          <TodoList items= {exampleTodoItems } />
      </div>
      </main>
    );
  }
}

export default App;
