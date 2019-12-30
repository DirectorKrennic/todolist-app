import React from 'react';
import ToDoList from './ToDoList/ToDoList';
import ToDoItem from './ToDoItem/ToDoItem';
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
        <ToDoList></ToDoList>
        <ToDoItem></ToDoItem>
      </div>
    );
  }

  componentDidMount = () => {
    const todos = localStorage.getItem('todos');
    if(todos){
      console.log('Has todos', todos);
    }else{
      console.log('No todos');
    }
  }

}

export default App;
