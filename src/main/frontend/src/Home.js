import "./Home.css";
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
