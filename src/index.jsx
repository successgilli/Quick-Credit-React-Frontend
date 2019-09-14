import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import User from './components/user.jsx';
import Routes from './Routes.jsx';
import { Provider } from 'react-redux';
import store from './store.jsx';
import { connect } from 'redux';
import {BrowserRouter as Router, Switch, Link} from 'react-router-dom';

class Index extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            page: (localStorage.getItem('page')? localStorage.getItem('page'):'index'),
            val: this.props.isLoggedIn
        }
    }
    render(){
        console.log(this.state.page)
        if (this.state.page === 'index') {
            return(
                <App changePage = {this.handleChangePage}/>
            )
        } 
        
        return(
            <Router>
                <Routes />
            </Router>
        )
    }
    handleChangePage = (val) => {
        this.setState({
            page:val
        })
        localStorage.setItem('page', val);
        console.log('satte changed')
    }
    componentDidUpdate(){
        console.log('changed')
    }
}

ReactDOM.render( <Provider store = {store}><Index /></Provider>, document.getElementById('root'));