import React from 'react';
import { connect } from 'react-redux';
import '../css/index.css';

const patterns = {
    email: /^([a-zA-Z])([a-z0-9A-Z]+)@([a-zA-Z]+)\.([a-zA-Z]{2,3})(\.[a-zA-Z]{2,3})?$/,
    password: /^[\w@-]{8,20}$/,
    name: /^[a-zA-Z]{5,12}$/,
    address: /(?!^[\d]+$)^[a-zA-Z0-9 ]{7,20}$/,
    amount: /^[0-9]{4,10}$/,
    bvn:/^[0-9]{11}$/,
    bankName: /^[a-zA-Z]{5,12}$/,
    accountNumber:/^[0-9]{10}$/,
    firstName: /^[a-zA-Z]{5,12}$/,
    lastName: /^[a-zA-Z]{5,12}$/,
    monthlyIncome: /^[0-9]{4,10}$/,
    companyName: /^[a-zA-Z]{5,12}$/,
    companyAddress: /(?!^[\d]+$)^[a-zA-Z0-9 ]{7,20}$/
  };
class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            vals: {},
            show: 'hide',
        }
    }
    render(){
        return(
            <div>
                <input type={(this.props.name === 'password' || this.props.name === 'confirmPassword')? 'password' : "text"} className="inputFields" onChange ={this.handleChange} name={this.props.name} required/>
                <label htmlFor="firstname">{this.props.label}</label>
                <div id="emailRes" className={this.state.show} >{this.props.errorVal}</div>
            </div>
        )
    }
    handleChange = (e) => {
        this.handleValidate(e.target);
        this.props.getval([e.target.name], e.target.value);
        this.setState({
            vals: {
                [e.target.name]: e.target.value
            }
        })
        this.props.getVals(this.state.vals);
    }
    handleValidate = (element) => {   
        if (element.name === 'password') {
            patterns['passwordval'] = element.value
            
        }
        if (element.name === 'confirmPassword') {
            if(element.value === patterns['passwordval']){
                this.props.removeError(element.name, element.name)
                this.setState({
                    show: 'hide'
                })
            } else {
                this.props.recordError(element.name, element.name)
                this.setState({
                    show: 'errorRes'
                })
            }
        } else {
            if(! patterns[element.name].test(element.value)){
                this.props.recordError(element.name, element.name)
                this.setState({
                    show: 'errorRes'
                })
            } else {
                this.props.removeError(element.name, element.name)
                this.setState({
                    show: 'hide'
                })
            }
        }
    }
    // handleErrorShow = (errorState) => {
    //     this.setState({show: errorState});
    // }
}

export default connect(state => state)(Input);
