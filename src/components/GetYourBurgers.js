import React from "react";
import axios from "axios";
import icongourmet from "../assets/icon-gourmet.png";
import icondelete from "../assets/icon-delete.png";
import iconedit from "../assets/icon-edit.png";
import '../styles/reset.css';
import "../styles/GetYourBurgers.css";
import header from '../assets/header-yourburgers.png';


class GetYourBurgers extends React.Component {
    constructor() {
        super();
        this.state = {
            editStatus: false,
            title: "",
            ingredient1: "",
            ingredient2: "",
            ingredient3: "",
            ingredient4: "",
            currentView: "getyourburgers",
            burgers: [],
            gourmet: []
        }
        this.editBurger = this.editBurger.bind(this);
        this.deleteBurger = this.deleteBurger.bind(this);
        this.gourmetBurger = this.gourmetBurger.bind(this);
    }

    componentDidMount(){
        axios.get("/api/burgers")
        .then(response => {
            this.setState({burgers: response.data});
        })
        .catch(err => {
          console.log("Error");
        })
    }

    gourmetBurger (burger){
        // console.log(burger);
        axios.post("/api/gourmet", burger).then(response => {
            console.log(response);
            this.props.updateGourmet(response.data);
        });
    }

    editBurger(id) {
        const { title, ingredient1, ingredient2, ingredient3, ingredient4 } = this.state;
        let body = {
            title,
            ingredient1,
            ingredient2,
            ingredient3,
            ingredient4
        };
        axios.put(`/api/burgers/${id}`, body).then(response => {
            this.props.updateBurgers(response.data);
        });
        this.setState({
            editStatus : false
        })
    }
    
    deleteBurger(id){
        axios.delete(`/api/burgers/${id}`).then(response => {
            console.log(response.data)
            this.props.deleteTheBurger(response.data);
        })
    }

    handleInput(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div>
                <header>
                <img className="header" src={header} alt="header" />
                </header>           
                <main className="yourburgersmain" >
                <div className="displaycards">
                {this.props.burgers.map((element, index) => {
                    return (
                        <div key={index}>
                            {this.state.editStatus ?
                                <div>
                                    <input onChange={(e) => this.handleInput(e)} placeholder="title" name="title" /> 
                                    <input onChange={(e) => this.handleInput(e)} placeholder="ingredient1" name="ingredient1" />
                                    <input onChange={(e) => this.handleInput(e)} placeholder="ingredient2" name="ingredient2"/>
                                    <input onChange={(e) => this.handleInput(e)} placeholder="ingredient3" name="ingredient3"/>
                                    <input onChange={(e) => this.handleInput(e)} placeholder="ingredient4" name="ingredient4"/>
                                    <button onClick={() => this.editBurger(element.id)} > 86 Your Order </button>
                                    <button onClick={() => this.setState({
                                        editStatus : false
                                    })} > Just Kidding! </button>
                                </div>
                                :
                                <div>
                                    <h1>{element.title}</h1>
                                    <h2>{element.ingredient1}</h2>
                                    <h2>{element.ingredient2}</h2>
                                    <h2>{element.ingredient3}</h2>
                                    <h2>{element.ingredient4}</h2>
                                    <img
                                        onClick={() => this.gourmetBurger(element)}
                                        className="burger__gourmet"
                                        alt="like__button"
                                        src={icongourmet} />
                                    <img
                                        onClick={() => this.deleteBurger(element.id)}
                                        className="burger__delete"
                                        alt="delete__button"
                                        src={icondelete} />
                                    <img
                                        onClick={() => this.setState({
                                            editStatus: true
                                        })}
                                        className="burger__edit"
                                        alt="edit__button"
                                        src={iconedit} />
                                </div>
                            }
                        </div>
                    );
                })}
                </div>
                </main>
            </div>
        );
    }
}

export default GetYourBurgers;