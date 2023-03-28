import "./Home.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddItem from "./Additem";

function Home() {
  (() => {
    console.log("rendering!");
  })();

  return (
    <div id="home" className="home-container">
      <div className="home-item">
        <AddItem />
      </div>
    </div>
  );
}

export default Home;
