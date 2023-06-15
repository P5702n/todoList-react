import React from 'react'
import { useState } from 'react';

const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = () => {
        if (!title || !desc) {
            alert("Title or description cannot be blank.")
        } else {
            setTitle(title);
            setDesc(desc)
            props.addTodo(title, desc)
            setTitle("");
            setDesc("");
        }
    }

    return (
        <>
            <div className='my-4' style={{
                margin: "0 auto",
                width: "50vw"
            }}>
                <h3>Add todo here.</h3>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Enter Todo title</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" onChange={(e) => {
                        setTitle(e.target.value);
                    }} value={title} key={props.todos.length + 1} placeholder="Todo title here." />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Todo description here.</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" value={desc} key={props.todos.srn + 1} onChange={(e) => {
                        setDesc(e.target.value);
                    }} rows="4"></textarea>
                </div>
                <button className="btn btn-sm btn-success" onClick={submit}>Add todo</button>
            </div>
        </>
    )
}

export default AddTodo
