import React from "react";
import axios from "axios";
// import icondelete from "../assets/icon-delete.png";
import "../styles/GetYourBurgers.css";

class GetGourmet extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "",
            ingredient1: "",
            ingredient2: "",
            ingredient3: "",
            ingredient4: ""
        }
        // this.deleteBurger = this.deleteBurger.bind(this);
    };

    componentDidMount() {
        axios.get("/api/getgourmet")
            .then(response => {
                this.setState({ burgers: response.data });
            })
            .catch(err => {
                console.log("Error");
            })
    }

    // deleteBurger(id) {
    //     axios.delete(`/api/getyourburgers/${id}`).then(response => {
    //         console.log(response.data)
    //         this.props.deleteTheBurger(response.data);
    //     })
    // }

    render() {
        return (
            <div>
                {this.props.burgers.map((element, index) => {
                    return (
                        <div key={index}>
                            <h1>{element.title}</h1>
                            <h2>{element.ingredient1}</h2>
                            <h2>{element.ingredient2}</h2>
                            <h2>{element.ingredient3}</h2>
                            <h2>{element.ingredient4}</h2>
                            {/* <img
                                onClick={() => this.deleteBurger(element.id)}
                                className="burger__delete"
                                alt="delete__button"
                                src={icondelete} /> */}
                        </div>
                )
            }
            )
        }</div>
        )
    };
}
export default GetGourmet;