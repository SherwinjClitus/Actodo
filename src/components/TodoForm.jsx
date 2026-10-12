import { useState } from "react";

function TodoForm(props) {
  const activityArr = props.activityArr;
  const setactivityArr = props.setactivityArr;

  const [newActivity, setnewActivity] = useState();

  function handleChange(event) {
    setnewActivity(event.target.value);
  }

  function addActivity(){
    setactivityArr([...activityArr,{id:activityArr.lenght +1,activity:newActivity}])
    setnewActivity("")
  }

  return (
    <>
      <div>
        <h1 className="my-1 font-medium">Manage Activities</h1>
        <div className="border-2 w-fit">
          <input
            type="text"
            value={newActivity}
            onChange={handleChange}
            placeholder="Enter next activities"
            className=" p-0.5 outline-none placeholder:text-xs text-sm leading-0.5"
          ></input>
          <button onClick={addActivity} className="bg-black text-amber-50 p-0.5 hover:cursor-pointer hover:bg-gray-500 hover:text-black">
            Add
          </button>
        </div>
      </div>
    </>
  );
}
export default TodoForm;
