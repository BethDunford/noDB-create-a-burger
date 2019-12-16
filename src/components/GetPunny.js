import React from "react";
import axios from "axios";
import InputFields from "./InputFields";


class GetPunny extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "",
            ingredient1: "",
            ingredient2: "",
            ingredient3: "",
            ingredient4: "",
            currentView: "getpunny"
        }
        this.handleInput = this.handleInput.bind(this);
        this.addClick = this.addClick.bind(this);
    };

handleInput (e){
    this.setState ({[e.target.name]: e.target.value})
}

addClick (){
    const { title, ingredient1, ingredient2, ingredient3, ingredient4 } = this.state;
    let body = {
        title,
        ingredient1,
        ingredient2,
        ingredient3,
        ingredient4
    };
    axios.post("/api/getyourburgers", body).then(response => {
        this.props.updateBurgers(response.data);
    })
    this.setState({
        title : "",
        ingredient1 : "",
        ingredient2 : "",
        ingredient3 : "",
        ingredient4 : ""
    })
}

    render(){
        // console.log(this.state);
        return (
            <div>
                <InputFields placeholder="Title" name="title" onHandleInput={this.handleInput} />
                <InputFields placeholder="Ingredient 1" name="ingredient1" onHandleInput={this.handleInput} />
                <InputFields placeholder="Ingredient 2" name="ingredient2" onHandleInput={this.handleInput} />
                <InputFields placeholder="Ingredient 3" name="ingredient3" onHandleInput={this.handleInput} />
                <InputFields placeholder="Ingredient 4" name="ingredient4" onHandleInput={this.handleInput} />
                <button onClick={() => {this.addClick()
                this.props.showGetBurgers()} } >Place Your Order</button>
            </div>
        )
    }
}

export default GetPunny;