import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import Aside from './aside.jsx';
import Footer from './footer.jsx';
import UserHeader from './userHeader.jsx';
import UserDashboard from './userDashboard.jsx';

class User extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            asideClass: 'asideClose',
            userMainContainer: 'userMainContainer'
        }
    }
    render(){
        return(
            <main id="userMain">
                <Aside asideClass = {this.state.asideClass}>
                    <div className="aside"><p id="dashboard"><i className="fas fa-chart-line"></i> &nbsp; Dashboard</p></div>
                    <div className="aside"><p ><i className="fas fa-file-signature"></i> &nbsp; Apply for Loan</p></div>
                    <div className="aside"><p ><i className="fas fa-user"></i> &nbsp; Profile</p></div>
                    <div className="aside"><p><i className="fas fa-sign-out-alt"></i> &nbsp; Log Out</p></div>
                </Aside>
                <section id = {this.state.userMainContainer}>
                    <UserHeader toggleAside = {this.toggleAside}/>
                    <UserDashboard />
                    <Footer />
                </section>
            </main>
        )
    }
    toggleAside = () => {
        if (this.state.asideClass === 'asideClose') {
            this.setState({
                asideClass: 'asideOpen',
                userMainContainer: 'userMainContainer2'
            });
        } else {
            this.setState({
                asideClass: 'asideClose',
                userMainContainer: 'userMainContainer',
            });
        }
    }
}
export default User;
