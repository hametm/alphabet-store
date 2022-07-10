import Nav from "./Nav";
import "../styles/style.css";
import { Link } from "react-router-dom";


function Home(props) {
  return (
    <div className="container">
      <Nav amount={props.amount}/>
      <main className="home-container">
        <div id="home-text">
          <h1>Buy the alphabet!</h1>
          <Link style={{textDecoration: "none"}} to="/shop">
            <h2>New styles are IN</h2>
            <button className="home-button">SHOP NOW</button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Home;