import React, { memo, useContext, useState } from "react";
import { CountContext } from "./components/context";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { counterState } from "./store/atoms/count";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <div>
      <RecoilRoot>
        <Todo></Todo>
      </RecoilRoot>
    </div>
  );
};

function Todo() {
  console.log("hi");
  return (
    <>
      <div>
        <ShowCount></ShowCount>
        <ButtonsClick></ButtonsClick>
      </div>
    </>
  );
};
function ShowCount() {
  const counter = useRecoilValue(counterState);
  return (
    <>
      <div>Count is : {counter}</div>
    </>
  );
}
function ButtonsClick() {
  const setCount=useSetRecoilState(counterState);
  // const[count,setCount]=useRecoilState(counterState);
  console.log("hi ------------")
  return (
    <>
      <div>
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          Increase
        </button>
        <br />
        <button
          onClick={() => {
            setCount((prev) => prev - 1);
          }}
        >
          Decrease
        </button>
      </div>
    </>
  );
}

export default App;
