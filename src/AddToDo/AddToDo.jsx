import React from 'react';

class AddToDo extends React.Component {

    render(){
        return(
            <div>
                <form className='addToDoContainer'>
                    <input onChange={(e) => this.updateInput(e)} type='text'></input>
                    <button type='submit'>Add ToDo</button>
                </form>
            </div>
        );
    }

    updateInput = (e) => {
        console.log(e);
    }
}

export default AddToDo;