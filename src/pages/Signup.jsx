import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function Signup(props) {
  const users = props.users;
  const setusers = props.setusers;

  const [Eusername, setEusername] = useState();
  const [Epass, setEpass] = useState();

  const navigate = useNavigate();

  function handleEuserinput(event) {
    setEusername(event.target.value);
  }
  function handleEpassinput(event) {
    setEpass(event.target.value);
  }

  function addUser() {
    setusers([...users, { username: Eusername, password: Epass }]);
    navigate('/')
  }

  return (
    <>
      <div className="min-h-screen w-full bg-black p-10">
        <div className="bg-amber-50 p-10 rounded-2xl">
          <h1 className="text-3xl">Welcome &#128158;</h1>
          <p>You can Signup here :)</p>
          <div className="flex-col my-3">
            <div className="my-3">
              <input
                type="text"
                placeholder="Username"
                className="w-fit border-2 outline-none px-1 rounded-md"
                onChange={handleEuserinput}
              ></input>
            </div>
            <div className="my-3">
              <input
                type="text"
                placeholder="password"
                className="w-fit border-2 outline-none px-1 rounded-md"
                onChange={handleEpassinput}
              ></input>
            </div>
            <div className="my-3">
              <input
                type="text"
                placeholder="confirm password"
                className="w-fit border-2 outline-none px-1 rounded-md"
              ></input>
            </div>
            <button
              className="bg-green-500 text-black px-3 text-xm rounded-md cursor-pointer"
              onClick={addUser}
            >
              Sign up
            </button>
            <p className="text-xs my-3">
              Already have an account?
              <span className="underline text-purple-700 cursor-pointer">
                <Link to={"/"}>login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
