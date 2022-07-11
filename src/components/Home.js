import Nav from "./Nav";
import "../styles/style.css";
import { Link } from "react-router-dom";
import iceland from "../styles/images/iceland.jpg";

function Home(props) {
  return (
    <div className="container">
      <Nav amount={props.amount}/>
      <main className="home-container">
          <div className="hero-container">
            <div className="hero"></div>
            <div className="home-text">
              <h1>OUT NOW: HANGUL</h1>
              <p>Check out the smart styles of the Korean language.</p>
              <Link className="home-link" style={{textDecoration: "none"}} to="/hangul-shop">
                <button className="home-button">SHOP NOW</button>
              </Link>
            </div>
          </div>
          {/* <div className="iceland-container">
            <img src={iceland} alt="" />
            <h2>The Land of Ice and Fire</h2>
            <p>Shop the cool, classic look of Icelandic.</p>
          </div> */}
      </main>
    </div>
  );
}

export default Home;