import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../css/userDashbord.css';

class UserHeader extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render(){
        const { user, handleUserRoute, handleLogout } = this.props;
        return (
            <section id="userHead">
                <div id="navHead" onClick = {this.handleAside}>
                    <i id="navWide" className="fas fa-bars"></i>
                </div>
                <div id = 'firstHead'>
                    <Link to="./apply" onClick={() => handleUserRoute(2)}>
                        <button className="headbtns">
                            <i className="fas fa-file-signature"></i> &nbsp; Apply for Loan
                        </button>
                    </Link>
                    <Link to="./profile" onClick={() => handleUserRoute(3)}>
                        <button className="headbtns">
                            <i className="fas fa-user"></i> &nbsp; Update Profile
                        </button>
                    </Link>
                    <Link to="./home" onClick={handleLogout}>
                        <button className="headbtns">
                            <i className="fas fa-sign-out-alt"></i> &nbsp; Log Out
                        </button>
                    </Link>
                </div>
                <div id="secondHead">
                    <img src= { user.passporturl || "https://militaryfamilies.psu.edu/wp-content/uploads/2019/04/placeholder_profile_photo.png" } alt="" id="userImage"/>
                    <i className="fas fa-bars" id="navUser"></i>
                </div>
            </section>
        )
    }

    handleAside = () => {
       this.props.toggleAside()
    }
}

export default connect(state => state)(UserHeader);
