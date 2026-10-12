
import "./index.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";

function App() {
        const [users,setusers] = useState([
        {
            username:"Sherwin",
            password:"123"
        }
    ])
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login users={users} setusers={setusers}/>}/>
      <Route  path="/signup" element={<Signup users={users} setusers={setusers}/>}/>
      <Route path='/landing' element={<Landing/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
