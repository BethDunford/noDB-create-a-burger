import React from "react";
import axios from "axios";
import InputFields from "./InputFields";
import "../styles/reset.css";
import '../styles/GetPunny.css';
import header from '../assets/header-punny.png';
// import Footer from "./Footer";
import punnybutton from "../assets/punny-button.png";
import yourbutton from "../assets/your-button.png";
import gourmetbutton from "../assets/gourmet-button.png";
import GetYourBurgers from './GetYourBurgers';
import GetGourmet from './GetGourmet';
import Img from "./Img";


class GetPunny extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "",
            ingredient1: "",
            ingredient2: "",
            ingredient3: "",
            ingredient4: "",
            currentView: "getpunny",
            burgers: [],
            gourmet: []
        }
        this.handleInput = this.handleInput.bind(this);
        this.addClick = this.addClick.bind(this);
        this.updateBurgers = this.updateBurgers.bind(this);
        this.deleteTheBurger = this.deleteTheBurger.bind(this);
        this.updateGourmet = this.updateGourmet.bind(this);
        this.deleteTheGourmetBurger = this.deleteTheGourmetBurger.bind(this);
        this.showGetBurgers = this.showGetBurgers.bind(this);
        // this.updateCurrentView = this.updateCurrentView.bind(this);
    };

    handleInput(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    addClick() {
        const { title, ingredient1, ingredient2, ingredient3, ingredient4 } = this.state;
        let body = {
            title,
            ingredient1,
            ingredient2,
            ingredient3,
            ingredient4
        };
        axios.post("/api/burgers", body).then(response => {
            this.props.updateBurgers(response.data);
        })
        this.setState({
            title: "",
            ingredient1: "",
            ingredient2: "",
            ingredient3: "",
            ingredient4: ""
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
    
      showGetBurgers() {
        this.setState({ currentView: "getyourburgers" })
      }

    // updateCurrentView () {
    //     this.state.currentView === "getpunny" ? 
    // }

    render() {
        // console.log(this.state);
        return (
            <div>
                <header>
                <img className="header" src={header} alt="header" />
                </header>
                <main className="getpunnymain">
                    <div className="input-fields">
                        <div>
                            <InputFields placeholder="Title" name="title" onHandleInput={this.handleInput} />
                            <InputFields placeholder="Ingredient 1" name="ingredient1" onHandleInput={this.handleInput} />
                            <InputFields placeholder="Ingredient 2" name="ingredient2" onHandleInput={this.handleInput} />
                            <InputFields placeholder="Ingredient 3" name="ingredient3" onHandleInput={this.handleInput} />
                            <InputFields placeholder="Ingredient 4" name="ingredient4" onHandleInput={this.handleInput} />
                            <button onClick={() => {
                                this.addClick()
                                this.props.showGetBurgers()
                            }} >Place Your Order</button>
                        </div>
                    </div>
                    {/* <Footer updateCurrentView={this.currentView}/> */}
                </main>

                <div className="GetPunny">

                    {this.state.currentView === "getpunny" ? (
                        <div>
                            <footer className="footer">
                                {/* <h1>Create A Burger-Of-The-Day!</h1> */}

                                <img src={punnybutton} alt="Get Punny" className="punny" onClick={() => this.setState({ currentView: "getpunny" })} />
                                <Img />
                                <img src={yourbutton} alt="Get Your Burgers" className="yourburgers" onClick={() => this.setState({ currentView: "getyourburgers" })} />
                                <Img />
                                <img src={gourmetbutton} alt="Get Gourmet" className="gourmet" onClick={() => this.setState({ currentView: "getgourmet" })} />
                            </footer>
                        </div>
                    ) : this.state.currentView === "getpunny" ? (
                        <div>
                            <GetPunny updateBurgers={this.updateBurgers} showGetBurgers={this.showGetBurgers} />
                        </div>
                    ) : (this.state.currentView === "getyourburgers") ? (
                        <div>
                            <GetYourBurgers burgers={this.state.burgers} updateBurgers={this.updateBurgers} deleteTheBurger={this.deleteTheBurger} updateGourmet={this.updateGourmet} />
                            <button className="punny" onClick={() => this.setState({ currentView: "getpunny" })} >
                                <img src={punnybutton} alt="Get Punny" />
                            </button>
                            <button className="gourmet" onClick={() => this.setState({ currentView: "getgourmet" })} >
                                <img src={gourmetbutton} alt="Get Gourmet" />
                            </button>
                        </div>
                    )
                                :
                                (this.state.currentView === "getgourmet") ? (
                                    <div>
                                        <GetGourmet updateGourmet={this.updateGourmet} gourmet={this.state.gourmet} deleteTheGourmetBurger={this.deleteTheGourmetBurger} />
                                    </div>
                                ) : null
                    }



                </div>

            </div>
        )
    }
}

export default GetPunny;