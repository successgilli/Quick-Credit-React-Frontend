import React from 'react';
import '../css/index.css';
import Input from './input.jsx';
const patterns = {
    email: /^([a-zA-Z])([a-z0-9A-Z]+)@([a-zA-Z]+)\.([a-zA-Z]{2,3})(\.[a-zA-Z]{2,3})?$/,
    password: /^[\w@-]{7,20}$/,
    name: /^[a-zA-Z]{5,12}$/,
    address: /(?!^[\d]+$)^[a-zA-Z0-9 ]{7,20}$/,
    amount: /^[0-9]{4,10}$/,
    bvn:/^[0-9]{11}$/,
    accountNumber:/^[0-9]{10}$/,
    firstName: /^[a-zA-Z]{5,12}$/,
    lastName: /^[a-zA-Z]{5,12}$/
  };
class Tab extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            vals: {},
            errors:{}
        }
    }
    render(){
        return(
            <div className = {this.props.cls}>
                <p>{this.props.ptag}</p>
                <Input
                getval = {this.props.getval}
                getVals = {this.props.getVals} name={this.props.name1} 
                label = {this.props.label1} type ={this.props.type} errorVal = {this.props.error1}
                recordError = {this.props.recordError} removeError = {this.props.removeError}
                />
                <Input
                getval = {this.props.getval}
                getVals = {this.props.getVals} name={this.props.name2}
                recordError = {this.props.recordError} removeError = {this.props.removeError}
                label = {this.props.label2} type ={this.props.type} errorVal = {this.props.error2}
                />
                <Input 
                getval = {this.props.getval}
                getVals = {this.props.getVals} name={this.props.name3} 
                recordError = {this.props.recordError} removeError = {this.props.removeError}
                label = {this.props.label3} type ={this.props.type} errorVal = {this.props.error3}
                />
            </div>
        )
    }
    
}

export default Tab;