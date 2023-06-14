import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';

function App() {
  let [todos, setTodos] = useState([
    {
      srn: 1,
      title: "Go to shamshan",
      desc: "buy fruits"
    }
  ])
  const handleDelTodo = (todo) => {
    console.log(todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }
    ))
  }
  let srn = todos.length === 0 ? 1 : todos[todos.length - 1].srn + 1;
  const addTodo = (title, desc) => {
    console.log(title, desc);
    // srn = todos[todos.length - 1].srn + 1;
    const myTodo = {
      srn: srn,
      title: title,
      desc: desc
    };
    setTodos([...todos, myTodo]);
  }

  return (
    <>
      <Navbar title="✅TodoList" />
      <AddTodo todos={todos} addTodo={addTodo} />
      <Todo todos={todos} handleDelClick={handleDelTodo} />
    </>
  );
}

export default App;
