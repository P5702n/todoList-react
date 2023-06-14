import React from 'react'

const TodoItem = (props) => {
    return (
        <div className='container my-4'>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
            <button className="btn btn-sm btn-danger" key={props.todos.length + 1} onClick={() => props.handleDelClick(props.todos)}>Delete</button>
            <hr />
        </div>
    )
}

export default TodoItem
