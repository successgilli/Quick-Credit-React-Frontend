import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import Aside from './aside.jsx';
import Footer from './footer.jsx';
import UserHeader from './userHeader.jsx';
import UserDashboard from './userDashboard.jsx';
import CalculatorHome from './calculatorHome.jsx';
import UserLoan from './userLoan.jsx';
import Modal from './modal.jsx';

class User extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            asideClass: 'asideClose',
            userMainContainer: 'userMainContainer',
            page: 1
        }
    }
    render(){
        const { page } = this.state;
        return(
            <main id="userMain">
                <Aside asideClass = {this.state.asideClass}>
                    <Link to="/"><div className="aside" onClick={() => this.handleUserRoute(1)}><p id={page === 1 ? "dashboard" : ""}><i className="fas fa-chart-line"></i> &nbsp; Dashboard</p></div></Link>
                    <Link to="/apply"><div className="aside" onClick={() => this.handleUserRoute(2)}><p id={page === 2 ? "dashboard" : ""}><i className="fas fa-file-signature"></i> &nbsp; Apply for Loan</p></div></Link>
                    <Link to="/profile"><div className="aside" onClick={() => this.handleUserRoute(3)}><p id={page === 3 ? "dashboard" : ""}><i className="fas fa-user"></i> &nbsp; Profile</p></div></Link>
                    <div className="aside" ><p><i className="fas fa-sign-out-alt"></i> &nbsp; Log Out</p></div>
                </Aside>
                <section id = {this.state.userMainContainer}>
                    <UserHeader toggleAside = {this.toggleAside}/>
                    {(page === 1) && <UserDashboard />}
                    {(page === 2) && <UserLoan /> }
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
    handleUserRoute = (pageNumber) => {
        console.log(pageNumber, ' num');
        this.setState({ asideClass: 'asideClose', userMainContainer: 'userMainContainer', page: pageNumber});
    }
}
export default User;
