import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';

function App() {
  const [todos, setTodos] = useState([])
  const handleDelTodo = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }
    ))
  }
  let srn = todos.length === 0 ? 1 : todos[todos.length - 1].srn + 1;
  const addTodo = (title, desc) => {
    // srn = todos[todos.length - 1].srn + 1;
    const myTodo = {
      srn: srn,
      title: title,
      desc: desc
    };
    setTodos([...todos, myTodo]);
    localStorage.setItem(title, desc);
  }
  let isPresent;
  const handleSearchIn = (e) => {
    for (let i = 0; i < todos.length; i++) {
      const todo = todos[i];
      isPresent = todo.title.search(e.target.value);
      if (isPresent === -1) {
        console.log("Not present.");
        return <h3>Not present 🥹</h3>
      } else {
        setTodos(todos.filter((e) => {
          return e === todo;
        }
        ))
      }
    }
  }

  return (
    <>
      <Navbar title="✅TodoList" handleSearchIn={handleSearchIn} />
      <AddTodo todos={todos} addTodo={addTodo} />
      <Todo todos={todos} handleDelClick={handleDelTodo} />
    </>
  );
}

export default App;
