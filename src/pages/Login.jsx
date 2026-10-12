import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

function Login(props) {
  const [Eusername, setEusername] = useState();
  const [Epass, setEpass] = useState();
  const [Ruser, setRuser] = useState(true);


  const navigate = useNavigate();
  const users = props.users;
  const setusers = props.setusers;

  function handleEuserinput(event) {
    setEusername(event.target.value);
  }
  function handleEpassinput(event) {
    setEpass(event.target.value);
  }
  function handleusers() {
    let userfound = false;
    users.forEach(function (item) {
      if (item.username === Eusername && item.password === Epass) {
        console.log("Login Successful");
        userfound = true;
        navigate('/landing',{state:{user:Eusername}})
      }
    });
    if (userfound === false) {
      console.log("Login failed");
    }
  }

  return (
    <>
      <div className="min-h-screen w-full bg-black p-10">
        <div className="bg-amber-50 p-10 rounded-2xl">
          <h1 className="text-3xl">Hey Hi &#x1F44B; </h1>
          {Ruser ? (
            <p>I help you manage your activities after you login :)</p>
          ) : (
            <p className="text-red-500">Please sign up before login</p>
          )}

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
            <button
              className="bg-amber-400 text-black px-3 text-xm rounded-md cursor-pointer"
              onClick={handleusers}
            >
              Login
            </button>
            <p className="text-xs my-3">
              Don't have an account?
              <span className="underline text-purple-700 cursor-pointer">
                <Link to={"/signup"}>Signup</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;