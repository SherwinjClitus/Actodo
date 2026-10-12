import { useState } from "react";
import Todoitem from "./Todoitem";

function TodoList(props) {

    const activityArr = props.activityArr;
    const setactivityArr = props.setactivityArr;

  return (
    <>
      <div className="bg-violet-300 rounded-xs grow p-3">
        <h1 className="font-medium">Today's Activities</h1>
        {
            (activityArr.length === 0 ? <p className="text-xm">You haven't added anything yet...</p>:"")
        }
        {
            activityArr.map(function(item,index){
                return <Todoitem item={item} index={index} activityArr={activityArr} setactivityArr={setactivityArr} id={item.id}/>
            })
        }
      </div>
    </>
  );
}

export default TodoList;
