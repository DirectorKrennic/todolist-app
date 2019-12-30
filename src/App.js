import React from 'react';
import ToDoList from './ToDoList/ToDoList';
import ToDoItem from './ToDoItem/ToDoItem';
import AddToDo from './AddToDo/AddToDo';
import './App.css';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      todos: []
    }
  }

  render(){
    return(
      <div>
        <AddToDo addToDoFunction={this.addToDo}></AddToDo>
        <ToDoList todos={this.state.todos}></ToDoList>
      </div>
    );
  }

  componentDidMount = () => {
    const todos = localStorage.getItem('todos');
    if(todos){
      const savedToDos = JSON.parse(todos);
      this.setState({todos: savedToDos});
    }else{
      console.log('No todos');
    }
  }

  addToDo = async (todo) => {
    await this.setState({todos: [...this.state.todos, todo]});
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
    console.log(localStorage.getItem('todos'));
  } 

}

export default App;
