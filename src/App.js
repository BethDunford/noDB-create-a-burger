import React from 'react';
import axios from 'axios';
import './App.css';
import './reset.css';

//Components
// import Home from './components/Home';
import GetPunny from './components/GetPunny';
import GetYourBurgers from './components/GetYourBurgers';
import GetGourmet from './components/GetGourmet';
import Views from "./components/Views";
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
    this.setState({ burgers: newGourmetBurgers });
  }

  deleteTheBurger(newBurgers) {
    // console.log(newBurgers);
    this.setState({ burgers: newBurgers });
  }
  
  render(){
    return (
        <div className="App">
          <button onClick={() => this.setState({currentView: "getpunny"})} >Get Punny</button>
          <button onClick={() => this.setState({currentView: "getyourburgers"})} >Get Your Burgers</button>
          <button onClick={() => this.setState({currentView: "getinspired"})} >Get Inspired</button>
          <button onClick={() => this.setState({currentView: "getgourmet"})} >Get Gourmet</button>
          {this.state.currentView === "home"
          ? (
            <Views
            views={this.state.views} />
          ) : (
            <div>
            <GetPunny updateBurgers={this.updateBurgers} />
            <GetYourBurgers burgers={this.state.burgers} updateBurgers={this.updateBurgers} deleteTheBurger={this.deleteTheBurger} updateGourmet={this.updateGourmet} />
            <GetGourmet updateGourmet={this.updateGourmet} burgers={this.state.gourmet} />
            {/* <GetInspired /> */}
            </div>
          )
        }
        </div>
        );
}
}

export default App;
