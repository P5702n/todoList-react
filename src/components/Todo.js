import React from 'react'
import TodoItem from './TodoItem'


const Todo = ({ todos, handleDelClick, modeStyle }) => {

    return (
        <div className='container' style={{
            // margin: "0 auto",
            // width: "50vw",
            color: modeStyle === "dark" ? "white" : "black",
            backgroundColor: modeStyle === "dark" ? "#51087E" : "lavender",
        }}>
            <h1 className='text-center'>Your Todo List.👇</h1>
            <div className="container" style={{ display: 'flex', flexWrap: 'wrap' }}>
                {todos.length === 0 ? <h3>Add todo to display here.😃</h3> : (todos.map((todo) => {
                    return <TodoItem todos={todo} modeStyle={modeStyle} handleDelClick={handleDelClick} key={todo.srn} title={todo.title} desc={todo.desc} />
                }))}
            </div>
        </div>
    )
}

export default Todo 