import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';

function App() {

  const [todos, setTodos] = useState([])
  const [modeStyle, setModeStyle] = useState("light");
  window.onload = () => {
    let lsItem = [];
    for (let i = 0; i < localStorage.length; i++) {
      const e = localStorage[i];
      console.log(localStorage.key(i))
      let desc = localStorage.getItem(localStorage.key(i));
      if (localStorage.length > 0) {
        lsItem.push({
          srn: i + 1,
          title: localStorage.key(i),
          desc: desc
        })
      }
    }
    setTodos(lsItem);
  }
  const handleDelTodo = (todo) => {
    setTodos(todos.filter((e) => {
      localStorage.removeItem(e.title);
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

  let handleModeChange = (e) => {
    if (e.target.checked) {
      setModeStyle("dark")
    } else {
      setModeStyle("light")
    }
  }
  document.body.style.background = modeStyle === "dark" ? "#005656" : "lavender"
  return (
    <>
      <Navbar title="✅TodoList" modeStyle={modeStyle} handleModeChange={handleModeChange} />
      <AddTodo todos={todos} addTodo={addTodo} modeStyle={modeStyle} />
      <Todo todos={todos} handleDelClick={handleDelTodo} modeStyle={modeStyle} />
    </>
  );
}

export default App;
