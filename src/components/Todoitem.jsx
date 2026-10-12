function Todoitem(props) {
  const activityArr = props.activityArr;
  const setactivityArr = props.setactivityArr;

  function handledelete(deletedid) {
    console.log(deletedid)
    var temparr = activityArr.filter(function (item) {
      if (item.id == deletedid) {
        return false;
      } else {
        return true;
      }
    });
    setactivityArr(temparr);
  }
  return (
    <>
      <div className="flex justify-between">
        <p>
          {props.index + 1}. {props.item.activity}
        </p>
        <button className="text-red-400 hover:cursor-pointer" onClick={() => handledelete(props.id)}>
          <i className="fa fa-trash" aria-hidden="true"></i>
        </button>
      </div>
    </>
  );
}
export default Todoitem;
