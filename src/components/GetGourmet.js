import React from "react";
import axios from "axios";
import icondelete from "../assets/icon-delete.png";
import '../styles/reset.css';
import '../styles/GetGourmet.css';
import header from '../assets/header-gourmet.png';

class GetGourmet extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "",
            ingredient1: "",
            ingredient2: "",
            ingredient3: "",
            ingredient4: "",
            currentView: "getgourmet",
            gourmet: []
        }
        // this.deleteBurger = this.deleteBurger.bind(this);
        this.deleteGourmetBurger = this.deleteGourmetBurger.bind(this);
    };

    componentDidMount() {
        axios.get("/api/gourmet")
            .then(response => {
                this.setState({ gourmet: response.data });
            })
            .catch(err => {
                console.log("Error");
            })
    }

    deleteGourmetBurger(id) {
        axios.delete(`/api/gourmet/${id}`).then(response => {
            console.log(response.data)
            this.props.deleteTheGourmetBurger(response.data);
        })
    }

    render() {
        return (
            <div>
                {this.state.gourmet ? this.state.gourmet.map((element, index) => {
                    return (
                        <div>
                            <header>
                                <img className="header" src={header} alt="header" />
                            </header>
                            <main className="gourmetmain" >
                                <div className="displaycards" >
                        <div key={index}>
                            <h1>{element.title}</h1>
                            <h2>{element.ingredient1}</h2>
                            <h2>{element.ingredient2}</h2>
                            <h2>{element.ingredient3}</h2>
                            <h2>{element.ingredient4}</h2>
                            <img
                                onClick={() => this.deleteBurger(element.id)}
                                className="burger__delete"
                                alt="delete__button"
                                src={icondelete} />
                        </div>
                        </div>
                        </main>
                        </div>
                )
            }
            ) : null
        }</div>
        )
    };
}
export default GetGourmet;