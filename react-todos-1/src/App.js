import React from 'react';
import TodoItem from './TodoItem';
import todosData from './todosData';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.map((todo) => {
          if (todo.id === id) todo.completed = !todo.completed;
          return todo;
        })
      };
    });
  }

  render() {
    const todoItems = this.state.todos.map((item) => (
      <TodoItem key={item.id} item={item} callback={this.handleChange} />
    ));
    return <div className='todo-list'>{todoItems}</div>;
  }
}

export default App;
