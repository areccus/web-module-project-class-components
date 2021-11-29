import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'
import './components/Todo.css'
const list = [
  {todo: 'Style my Todo List',
  id: 123,
  completed: false}
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      list: list
    }
  }

  handleToggle = () => {
    this.setState({
      ...this.state,
      list: this.state.list.filter(item => {
        return (!item.completed);
      })
    });
  }

  handleAddItem = (item) => {

    const newItem = {
      todo: item,
      id: Math.floor(Math.random() * 1000),
      completed: false
    };

    this.setState({
      ...this.state,
      list: [...this.state.list, newItem]
    });
  }

  handleToggleItem = (item) => {

    this.setState({
      ...this.state,
      list: this.state.list.map(l => {
        if (l.id === item.id) {
          return {...l, completed: !l.completed}
        } else {
          return l;
        }
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
           <h1>Todo List</h1>
         </div>
        <TodoList handleToggleItem={this.handleToggleItem} list={this.state.list} />
        <TodoForm handleAddItem={this.handleAddItem}/>
        <button onClick={this.handleToggle} 
        className="clear-btn">Clear Completed</button>
       </div>
    );
  }
}

export default App;
