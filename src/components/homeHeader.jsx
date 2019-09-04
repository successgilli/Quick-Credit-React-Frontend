import React from 'react';
import '../css/index.css'

class HomeHeader extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return (
            <header>
                <div id="firstHeader">
                    <a href="./index.html">
                        <div className="logo">
                            <span id="logoQuick"><i className="fab fa-quora"></i>uick</span><span className="credit">Credit</span>
                        </div>
                    </a>
                </div>
                <div id="secondHeader">
                    <a href="./adminDashboard.html"><div className="headLinks">Admin</div></a>
                    <div className="headLinks" onClick ={this.handleClickSignin}>Login</div>
                    <div className="headLinks" onClick = {this.handleClickSignup}>SignUp</div>
                    <i className="fas fa-bars" id="nav"></i>
                </div>
            </header>
        )
    }
    handleClickSignin = () => {
        this.props.handleUserBackground('signBackgroundShow');
        this.props.handleToggleForm('loginShow', 'signupHide', 'LOG IN') 
        setTimeout(()=> {
            this.props.handleUserForm('signcontentShow', 'signheadShow');
        })
    }
    handleClickSignup = (e) => {
        this.props.handleToggleForm('loginHide', 'signupShow','SIGN UP');
        this.props.handleUserBackground('signBackgroundShow');
        setTimeout(()=> {
            this.props.handleUserForm('signcontentShow', 'signheadShow');
        })
    }
}

export default HomeHeader;