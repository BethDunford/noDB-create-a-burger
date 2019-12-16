import React from "react";
import axios from "axios";
import icondelete from "../assets/icon-delete.png";
import "../styles/GetYourBurgers.css";

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
        axios.get("/api/getgourmet")
            .then(response => {
                this.setState({ gourmet: response.data });
            })
            .catch(err => {
                console.log("Error");
            })
    }

    deleteGourmetBurger(id) {
        axios.delete(`/api/getgourmet/${id}`).then(response => {
            console.log(response.data)
            this.props.deleteTheGourmetBurger(response.data);
        })
    }

    render() {
        return (
            <div>
                {this.state.gourmet ? this.state.gourmet.map((element, index) => {
                    return (
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
                )
            }
            ) : null
        }</div>
        )
    };
}
export default GetGourmet;