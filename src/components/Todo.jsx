import React, { useContext } from "react";
import { CountContext } from "./context";

const Todo = () => {
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <div>{count}</div>
      <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  );
};

export default Todo;
