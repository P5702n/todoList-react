import React from 'react'
import TodoItem from './TodoItem'


const Todo = ({ todos, handleDelClick }) => {
    return (
        <div className='container' style={{
            margin: "0 auto",
            width: "50vw",
        }}>
            <h1>Your Todo List.👇</h1>
            {todos.length === 0 ? <h3>Add todo to display here.😃</h3> : (todos.map((todo) => {
                return <TodoItem todos={todo} handleDelClick={handleDelClick} key={todo.srn} title={todo.title} desc={todo.desc} />
            }))}
        </div>
    )
}

export default Todo 