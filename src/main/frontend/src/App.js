import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Home from "./Home";
import Login from "./Login";
import Nav from "./Devnav";
import Profile from "./Profile";
import Calculate from "./Calculate";
import Detail from "./Detail";
import Advice from "./Advice";
import ReactPrac from "./ReactPrac";
import Signup from "./Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/calculate" element={<Calculate />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="/advice" element={<Advice />}></Route>
          <Route path="/reactPrac" element={<ReactPrac />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
