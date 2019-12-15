import React from 'react';
// import axios from 'axios';
import './App.css';
import './reset.css';

//Components
import Home from './components/Home';
import GetPunny from './components/GetPunny';
import GetYourBurgers from './components/GetYourBurgers';
import GetGourmet from './components/GetGourmet';
// import GetInspired from './components/GetInspired';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      burgers: [],
      gourmet: []
    };
    this.updateBurgers = this.updateBurgers.bind(this);
    this.deleteTheBurger = this.deleteTheBurger.bind(this);
    this.updateGourmet = this.updateGourmet.bind(this);
  }

  updateBurgers(newBurgers){
    this.setState({burgers: newBurgers});
  }

  updateGourmet(newGourmetBurgers){
    this.setState({burgers: newGourmetBurgers});
  }

  deleteTheBurger(newBurgers){
    // console.log(newBurgers);
    this.setState({burgers: newBurgers});
  }

  render(){
  return (
    <div className="App">
      <Home />
      <GetPunny updateBurgers={this.updateBurgers} />
      <GetYourBurgers burgers={this.state.burgers} updateBurgers={this.updateBurgers} deleteTheBurger={this.deleteTheBurger} updateGourmet={this.updateGourmet}/>
      <GetGourmet updateGourmet={this.updateGourmet} burgers={this.state.burgers} />
      {/* <GetInspired /> */}
    </div>
  );
}
}

export default App;
