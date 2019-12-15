import React from "react";

class InputFields extends React.Component{
    render(){
        return(
            <input className="input-fields__input-fields" placeholder={this.props.placeholder} name={this.props.name} onChange={(e) => this.props.onHandleInput(e)} />
        )
    }
}

export default InputFields;