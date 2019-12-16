import React from 'react';
import axios from 'axios';
import '../src/styles/App.css';
import './reset.css';
import homebelchers from "../src/assets/home-graphic.png";
import punnybutton from "../src/assets/punny-button.png";
import yourbutton from "../src/assets/your-button.png";
import gourmetbutton from "../src/assets/gourmet-button.png";
import burgericon from "../src/assets/burger-icon.png";


//Components
import Home from './components/Home';
import GetPunny from './components/GetPunny';
import GetYourBurgers from './components/GetYourBurgers';
import GetGourmet from './components/GetGourmet';
// import Views from "./components/Views";
// import GetInspired from './components/GetInspired';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      burgers: [],
      gourmet: [],
      home: [],
      currentView: "home",
      views: []
    };
    this.updateBurgers = this.updateBurgers.bind(this);
    this.deleteTheBurger = this.deleteTheBurger.bind(this);
    this.updateGourmet = this.updateGourmet.bind(this);
    this.deleteTheGourmetBurger = this.deleteTheGourmetBurger.bind(this);
  }

  componentDidMount() {
    axios.get("/api/home")
      .then(response => {
        this.setState({ home: response.data });
      })
      .catch(err => {
        console.log("Error");
      })
  }

  updateBurgers(newBurgers) {
    this.setState({ burgers: newBurgers });
  }

  updateGourmet(newGourmetBurgers) {
    this.setState({ gourmet: newGourmetBurgers });
  }

  deleteTheBurger(newBurgers) {
    // console.log(newBurgers);
    this.setState({ burgers: newBurgers });
  }

  deleteTheGourmetBurger(newGourmetBurgers) {
    // console.log(newBurgers);
    this.setState({ gourmet: newGourmetBurgers });
  }

  render() {
    return (
      <div className="App">
        <main className="home__main">
          <img
            className="home__belchers"
            alt="meat-our-family"
            src={homebelchers}
          />
        </main>
        <footer className="footer">
          {/* <h1>Create A Burger-Of-The-Day!</h1> */}
          <button className="punny" onClick={() => this.setState({ currentView: "getpunny" })} >
            <img src={punnybutton} alt="Get Punny"/>
          </button>
          <img className="burger" src={burgericon} alt="burger" />
          <button className="yourburgers" onClick={() => this.setState({ currentView: "getyourburgers" })} >
            <img src={yourbutton} alt="Get Your Burgers"/>
          </button>
          <img className="burger" src={burgericon} alt="burger" />
          <button className="gourmet" onClick={() => this.setState({ currentView: "getgourmet" })} >
            <img src={gourmetbutton} alt="Get Gourmet"/>
          </button>
          {this.state.currentView === "home" ? (
            <div>
              <Home />
            </div>
          ) : this.state.currentView === "getpunny" ? (
            <div>
              <GetPunny updateBurgers={this.updateBurgers} />
            </div>
          ) : this.state.currentView === "getyourburgers" ? (
            <div>
              <GetYourBurgers burgers={this.state.burgers} updateBurgers={this.updateBurgers} deleteTheBurger={this.deleteTheBurger} updateGourmet={this.updateGourmet} />
            </div>
          ) : this.state.currentView === "getgourmet"(
            <div>
              <GetGourmet updateGourmet={this.updateGourmet} gourmet={this.state.gourmet} deleteTheGourmetBurger={this.deleteTheGourmetBurger} />
            </div>
          )}
        </footer>
      </div>
    );
  }
}

export default App;