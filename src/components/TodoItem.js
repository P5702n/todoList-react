import React from 'react'

const TodoItem = (props) => {
    return (
        <div className='my-4' style={{ width: "23vw", background: props.modeStyle === "dark" ? "#880ED4" : "rgb(211 211 255)", borderRadius: "20px", padding: "22px 22px", margin: "0 22px" }}>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
            <button className="btn btn-sm btn-info" style={{ background: props.modeStyle === "dark" ? "#A020F0" : "rgb(220, 220, 248)", color: props.modeStyle === "light" ? "black" : "white" }} key={props.todos.length + 1} onClick={() => props.handleDelClick(props.todos)}>Delete</button>
        </div>
    )
}

export default TodoItem
