import React from 'react';
import Input from './input.jsx';
import { connect } from 'react-redux';
import {signinUser} from '../redux/actions/user.jsx'
import '../css/index.css';
import '../css/loader.css';
import 'regenerator-runtime';

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            signVals: {},
            error: [],
            completed: [],
            show: 'hide',
            signedVals: [

            ],
            email:'',
            password:''

          }
    }
    render(){
        const { isLoggedIn } = this.props;
        return(
            <form action = "" id="loginForm" className={this.props.classname}>
                <div id={(this.props.isLoggedIn === 'true') ? 'successDiv' : 'successDivHide'}>successfully signedIn !</div>
                <Input getval = {this.getval}
                getVals = {this.bringSigninValues} name="email"
                label = "Email" errorVal = 'invalid email'
                recordError = {this.handleTabError} removeError = {this.handleRemoveError}
                />
                <Input getval = {this.getval}
                getVals = {this.bringSigninValues} name="password" 
                label = "Password" errorVal = {'password too short' || this.props.loginerror.password}
                recordError = {this.handleTabError} removeError = {this.handleRemoveError}
                />
                <div className="errorRes2">{(this.props.error.loginerror) ? this.props.error.loginerror.email:''}</div>
                <div className="errorRes2">{(this.props.error.loginerror) ? this.props.error.loginerror.password:''}</div>
                <div className="errorRes2">{ (typeof this.props.error.loginerror==='string') ? this.props.error.loginerror:''}</div>
                {
                    (isLoggedIn !== 'loading') &&  <button id="signinBtn" onClick = {this.handleLogin}> LOG IN</button>
                }
                {
                    (isLoggedIn === 'loading') && <button className="loadDiv">
                        <div className="loader"></div>
                    </button>
                }
            </form>
        )
    }
    bringSigninValues = (state) => {
        const initialVals = this.state.signVals;
        this.setState({
            signVals: {
                ...initialVals,
                ...state
            }
        })
    }
    getval = (name, value) => {
        this.setState({[name]:value})
    }
    componentDidUpdate(){
    }
    handleTabError = (err, comp) => {
        const error = this.state.error;
        const found = error.find(item => item === err);
        if (typeof found === 'undefined'){
            error.push(err)
            this.setState({error})
        }
        const completed = this.state.completed.filter(item => item !== comp);
        this.setState({completed});
    }
    handleRemoveError = (err,comp) => {
        const completed = this.state.completed;
        const found = completed.find(item => item === comp);
        if (typeof found === 'undefined'){
            completed.push(err)
            this.setState({completed})
        }
        const error = this.state.error.filter(item => item !== err);
        this.setState({error, completed})
    }
    handleLogin = async (e) => {
        e.preventDefault();
        const error = await this.props.signinUser({
            email: this.state.email,
            password: this.state.password
        });
    }
}

export default connect( state => state, { signinUser })(Login);