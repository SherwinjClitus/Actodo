import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useState } from "react";

function TodoContainer() {
  const [activityArr, setactivityArr] = useState([
    {
      id: 1,
      activity: "Wake up at 7.",
    },
    {
      id: 2,
      activity: "Go to GYM",
    },
    {
      id: 3,
      activity: "Eat breakfast at 8",
    },
  ]);
  return (
    <>
      <div className="flex flex-wrap justify-between gap-5 items-center">
        <TodoForm activityArr={activityArr} setactivityArr={setactivityArr}/>
        <TodoList activityArr={activityArr} setactivityArr={setactivityArr} />
      </div>
    </>
  );
}

export default TodoContainer;
