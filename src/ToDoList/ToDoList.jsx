import React from 'react';

class ToDoList extends React.Component {

    render(){

        const { todos } = this.props;

        return(
            <div className='todoListContainer'>
                {
                    todos.map((_todo, _index) => {
                        return(
                            <div key={_index}>{_todo}</div>
                        )
                    })
                }
            </div>
        )
    }
}

export default ToDoList;