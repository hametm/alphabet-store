import Nav from "./Nav";
import "../styles/style.css";
import { Link } from "react-router-dom";


function Home(props) {
  return (
    <div className="container">
      <Nav amount={props.amount}/>
      <main className="home-container">
          <div className="home-text">
            <h1>The Hangul Collection</h1>
            <p>Check out the smart styles of the Korean language.</p>
            <Link className="home-link" style={{textDecoration: "none"}} to="/hangul-shop">
              <button className="home-button">SHOP NOW</button>
            </Link>
          </div>
      </main>
    </div>
  );
}

export default Home;