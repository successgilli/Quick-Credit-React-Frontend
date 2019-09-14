import React from 'react';

import { Link, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';

import Aside from './aside.jsx';
import Footer from './footer.jsx';
import UserHeader from './userHeader.jsx';
import UserDashboard from './userDashboard.jsx';
import CalculatorHome from './calculatorHome.jsx';
import UserLoan from './userLoan.jsx';
import Modal from './modal.jsx';
import UserProfile from './userProfile.jsx';
import { userDetails } from '../redux/actions/user.jsx';
import AdminDashboard from './adminDashboard.jsx';

class User extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            asideClass: 'asideClose',
            userMainContainer: 'userMainContainer',
            page: 1
        }
    }

    componentDidMount(){
        const { userDetails } = this.props;
        localStorage.getItem('page') === 'user' && userDetails() ;
    }

    render(){
        const { page } = this.state;
        const { modal } = this.props;
        return(
            <main id="userMain">
                 {/* <Modal show={false} btnText={btnText} displayText={text} click={() => setShow(true)} handleClick={ btnText === 'Ok' ? closeRes : applyClick} /> */}
                <Modal show={modal.show} btnText={modal.btnText} displayText={modal.displayText} handleClick={modal.handleClick} />
                <Aside asideClass = {this.state.asideClass} handleUserRoute={this.handleUserRoute}>
                    { this.renderNav(localStorage.getItem('page'))}
                </Aside>
                <section id = {this.state.userMainContainer}>
                    <UserHeader toggleAside = {this.toggleAside} handleLogout={this.handleLogout} handleUserRoute={this.handleUserRoute} />
                    {(page === 1 && localStorage.getItem('page') === 'user' ) && <UserDashboard />}
                    {(page === 2 && localStorage.getItem('page') === 'user') && <UserLoan /> }
                    {(page === 3 && localStorage.getItem('page') === 'user') && <UserProfile />}
                    {(page === 1 && localStorage.getItem('page') === 'admin' ) && <AdminDashboard />}
                    <Footer />
                </section>
            </main>
        )
    }

    renderNav = (userPage) => {
        const { page } = this.state;
            return (
            <div>
                <Link to="/"><div className={userPage === 'user' ? "aside" : 'hide'} onClick={() => this.handleUserRoute(1)}><p id={page === 1 ? "dashboard" : ""}><i className="fas fa-chart-line"></i> &nbsp; Dashboard</p></div></Link>
                <Link to="/apply"><div className={userPage === 'user' ? "aside" : 'hide'} onClick={() => this.handleUserRoute(2)}><p id={page === 2 ? "dashboard" : ""}><i className="fas fa-file-signature"></i> &nbsp; Apply for Loan</p></div></Link>
                <Link to="/profile"><div className={userPage === 'user' ? "aside" : 'hide'} onClick={() => this.handleUserRoute(3)}><p id={page === 3 ? "dashboard" : ""}><i className="fas fa-user"></i> &nbsp; Profile</p></div></Link>
                {/*  */}
                <Link to="/"><div className={ userPage === 'admin' ? 'aside' : "hide"} onClick={() => this.handleUserRoute(1)}><p id={page === 1 ? "dashboard" : ""}><i className="fas fa-chart-line"></i> &nbsp; Dashboard</p></div></Link>
                <Link to="/unverified"><div className={ userPage === 'admin' ? 'aside' : "hide"} onClick={() => this.handleUserRoute(2)}><p id={page === 2 ? "dashboard" : ""}><i className="fas fa-user-ninja"></i> &nbsp; Unverified</p></div></Link>
                <Link to="/verified"><div className={ userPage === 'admin' ? 'aside' : "hide"} onClick={() => this.handleUserRoute(3)}><p id={page === 3 ? "dashboard" : ""}><i className="fas fa-user-check"></i> &nbsp; Verified</p></div></Link>
                <Link to="/current"><div className={ userPage === 'admin' ? 'aside' : "hide"} onClick={() => this.handleUserRoute(4)}><p id={page === 4 ? "dashboard" : ""}><i className="fas fa-lock-open"></i> &nbsp; Current Loans</p></div></Link>
                <Link to="/repaid"><div className={ userPage === 'admin' ? 'aside' : "hide"} onClick={() => this.handleUserRoute(5)}><p id={page === 5 ? "dashboard" : ""}><i className="fas fa-lock"></i> &nbsp; Repaid Loans</p></div></Link>
                <div className="aside" onClick={this.handleLogout}><p><i className="fas fa-sign-out-alt"></i> &nbsp; Log Out</p></div>
            </div>
        )
    }

    handleLogout = () => {
        const items = ['auth', 'page'];
        items.forEach(item => localStorage.removeItem(item));
        window.location.reload();
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
export default connect( state => state, { userDetails } )(User);
