import React from 'react';
import '../css/userDashbord.css';

class UserHeader extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <section id="userHead">
                <div id="navHead" onClick = {this.handleAside}>
                    <i id="navWide" className="fas fa-bars"></i>
                </div>
                <div id = 'firstHead'>
                    <a href="./userLoan.html">
                        <button className="headbtns">
                            <i className="fas fa-file-signature"></i> &nbsp; Apply for Loan
                        </button>
                    </a>
                    <a href="./userProfile.html">
                        <button className="headbtns">
                            <i className="fas fa-user"></i> &nbsp; Update Profile
                        </button>
                    </a>
                    <a href="./index.html">
                        <button className="headbtns">
                            <i className="fas fa-sign-out-alt"></i> &nbsp; Log Out
                        </button>
                    </a>
                </div>
                <div id="secondHead">
                    <img src="./src/img/profPic.jpg" alt="" id="userImage"/>
                    <i className="fas fa-bars" id="navUser"></i>
                </div>
            </section>
        )
    }

    handleAside = () => {
       this.props.toggleAside()
    }
}

export default UserHeader;