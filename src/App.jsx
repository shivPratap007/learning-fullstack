import React from "react";
import Todo from "./components/Todo";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([
    { title: "homework", description: "shiv" },
    { title: "wifi", description: "recharge" },
    { title: "washing", description: "eating" },
  ]);
  const [todoForm, setTodoForm] = useState(false);
  const [todo, setTodo] = useState({ title: "", description: "" });

  function handleTodo(e) {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value,
    });

  }

  function giveTodoForm() {
    setTodoForm(!todoForm);
  }

  function addTodo(){
    setTodos([...todos,todo]);
    setTodo({title:"",description:""})
  }
  return (
    <>
      <div>
        {todos.map((todo) => (
          <Todo title={todo.title} description={todo.description} key={todo.title}/>
        ))}
        <button className="border border-rose-300 p-2" onClick={giveTodoForm}>
          Create todo
        </button>
        {todoForm && (
          <div>
            <input
              type="text"
              name="title"
              placeholder="todo"
              value={todo.title}
              onChange={(e) => {
                handleTodo(e);
              }}
            />
            <input
              type="text"
              name="description"
              value={todo.description}
              onChange={(e) => {
                handleTodo(e);
              }}
              placeholder="description"
            />
            <button onClick={addTodo}>Submit</button>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
