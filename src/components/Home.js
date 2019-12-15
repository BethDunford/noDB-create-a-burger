import React from "react";
import axios from "axios";

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            home: []
        }
    };

    componentDidMount() {
        axios.get("/api/home")
            .then(response => {
                this.setState({ home: response.data });
            })
            .catch(err => {
                console.log("Error");
            })
    }

    render() {
        return (
            <div>
                <button>Get Punny</button>
                <button>Get Your Burgers</button>
                <button>Get Inspired</button>
                <button>Get Gourmet</button>
            </div>
        )
    }

}
export default Home;