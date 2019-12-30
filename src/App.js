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
        <AddToDo></AddToDo>
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

}

export default App;
