import React from 'react';

class AddToDo extends React.Component {

    constructor(){
        super();
        this.state = {
            todo: ''
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={(e) => this.submitToDo(e)} className='addToDoContainer'>
                    <input onChange={(e) => this.updateInput(e)} type='text'></input>
                    <button type='submit'>Add ToDo</button>
                </form>
            </div>
        );
    }

    updateInput = (e) => {
        this.setState({todo: e.target.value})
    }

    submitToDo = (e) => {
        e.preventDefault();
        this.props.addToDoFunction(this.state.todo)
    }
}

export default AddToDo;