import React from 'react';
import HomeHeader from './components/homeHeader.jsx';
import CalcSection from './components/homeCalcSection.jsx';
import Footer from './components/footer.jsx';
import UserSign from './components/signUser.jsx'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            signContent: 'signcontentHide',
            signHead: 'signheadHide',
            signBackground: 'signBackgroundHide' ,
            login: 'loginShow',
            signup: 'signupHide',
            ptag: ''
        }
    }
    render(){
        console.log(this.props, 'this')
        return(
            <div>
                <HomeHeader handleUserForm = {this.handleUserForm}
                handleToggleForm = {this.handleToggleForm}
                handleUserBackground={this.handleUserBackground}/>
                <UserSign 
                handleToggleForm = {this.handleToggleForm}
                handleUserForm = {this.handleUserForm}
                handleUserBackground={this.handleUserBackground}
                loginUser = {this.props.changePage}
                signHead= {this.state.signHead}
                signContent= {this.state.signContent}
                signBackground={this.state.signBackground}
                login={this.state.login}
                signup={this.state.signup}
                ptag={this.state.ptag}
                />
                <CalcSection handleUserForm = {this.handleUserForm}
                handleToggleForm = {this.handleToggleForm}
                handleUserBackground={this.handleUserBackground}/>
                <Footer />
            </div>
        )
    }
    handleUserForm = (contentClass, headClass) => {
        this.setState({
            signContent: contentClass,
            signHead: headClass,
        })
    }
    handleUserBackground = (backgroundClass) => {
        this.setState({
            signBackground: backgroundClass
        })
    }
    handleToggleForm = (loginclass, signupclass, ptag) => {
        this.setState({
            login: loginclass,
            signup: signupclass,
            ptag
        })
    }
}

export default App;