import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState,useRecoilState } from "recoil";
import { RecoilRoot } from "recoil";
import { filterTodo, searchTodo, todos } from "./store/atoms/todo";

const App = () => {
  return (
    <>
      <RecoilRoot>
        <ShowTodo />
        <SetTodo/>
        <div>============================</div>

        <SearchTodo />
        <FilterTodoList />
      </RecoilRoot>
    </>
  );
};

function SetTodo() {

  const[todo,setTodo]=useState("");
  const [allTodos,setTodoValue]=useRecoilState(todos);

  function handleTodoSubmit(){
    setTodoValue([...allTodos,{title:todo}]);
    setTodo("");
  }
  return (
    <div>
      <input
        type="text"
        style={{ border: "2px solid black" }}
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button onClick={handleTodoSubmit}>Submit</button>
    </div>
  );
}

function SearchTodo() {
  const setInputValue = useSetRecoilState(searchTodo);
  return (
    <>
      <input
        type="text"
        style={{ border: "2px solid black" }}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
    </>
  );
}

function FilterTodoList() {
  const filterdTodo = useRecoilValue(filterTodo);
  return (
    <div>
      {filterdTodo.map((todo) => (
        <div key={todo.title}>{todo.title}</div>
      ))}
    </div>
  );
}
function ShowTodo() {
  const [allTodos,setAllTodos ]= useRecoilState(todos);
  
  function handleDeleteTodos(dTodo){
    let newTodos=allTodos.filter(todo=> todo.title!=dTodo);
    setAllTodos([...newTodos]);
  }

  return (
    <div>
      {allTodos.map((todo) => (
        <div key={todo.title}>{todo.title}
        <div><button value={todo.title} onClick={()=>handleDeleteTodos(todo.title)}>Delete</button></div></div>
      ))}
    </div>
  );
}

export default App;
