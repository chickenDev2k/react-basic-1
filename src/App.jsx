import "./App.css";
import "./components/todo/todo.css";
import TodoNew from "./components/todo/TodoNew";
import TodoData from "./components/todo/TodoData";
import logo from "./assets/react.svg";
import { useState } from "react";
const App = () =>{
  const [todos,setTodos] = useState([
    {
      id:1,
      name:"Learning React "
    },
    {
      id:2,
      name:"Watching Youtube "
    },
  ]);
  const name = "quangit";
  const data = {
    address:"hanoi",
    age:24
  };
  return <div className="todo-container">
    <div className="todo-title">Todo list</div>
    <TodoNew />
    <TodoData name={name} data={data} todos ={todos}/>
    <div className="todo-image">
      <img src={logo} alt="" className="logo" />
    </div>
  </div>
}

export default App;