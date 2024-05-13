import { useState } from "react";
import { tasks } from "./data";
import "./App.css";
import Button from "./components/Button/Button";
import ShowTask from "./components/ShowTask/ShowTask";

export default function App() {
  const [content, setContent] = useState("");
  function handleClick(type) {
    setContent(type);
  }

  let taskContent = tasks;

  return (
    <>
      <div className="row1">
        <Button
          setClass="btn1"
          onClick={() => handleClick(0)}
          text="Завдання 1"
        ></Button>
        <Button
          onClick={() => handleClick(1)}
          text="Завдання 2"
          setClass="btn2"
        ></Button>
      </div>
      <div className="row2">
        <ShowTask task={content !== null ? taskContent[content] : null} />
      </div>
      <div className="row3">
        <Button
          onClick={() => handleClick("task3")}
          text="Завдання 3"
          setClass="btn3"
        ></Button>
        <Button
          onClick={() => handleClick(2)}
          text="Завдання 4"
          setClass="btn4"
        ></Button>
      </div>
    </>
  );
}
