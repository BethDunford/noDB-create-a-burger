import React from "react";

class Views extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }

render(){
    return(
        <div>
            {this.props.views.map((element, index) => {
                return(
                    <div key={index}>

                    </div>
                )
            })}
        </div>
    )
}

}

export default Views;