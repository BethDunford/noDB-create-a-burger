import React from "react";
import "../styles/reset.css";
import '../styles/InputFields.css';

class InputFields extends React.Component{
    render(){
        return(
            <input className="input-fields__input-fields" placeholder={this.props.placeholder} name={this.props.name} onChange={(e) => this.props.onHandleInput(e)} />
        )
    }
}

export default InputFields;