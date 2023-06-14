import React from 'react'
import TodoItem from './TodoItem'


const Todo = ({ todos, handleDelClick }) => {
    return (
        <div className='container' style={{
            margin: "0 auto",
            width: "50vw",
        }}>
            <h1>Your Todo List.👇</h1>
            {todos.length === 0 ? <h3>Add todo to display here.😃</h3> : (todos.map((value) => {
                return <TodoItem todos={value} handleDelClick={handleDelClick} key={value.srn} title={value.title} desc={value.desc} />
            }))}
        </div>
    )
}

export default Todo 