import React from 'react';
import '../css/index.css';
import Tab from './forTab.jsx';
import Login from './login.jsx';
import { signuser } from '../redux/actions/user';
import 'regenerator-runtime';

import { connect } from 'react-redux';

class UserSign extends React.Component{
    first = React.createRef();
    second = React.createRef();
    third = React.createRef();
    fourth = React.createRef()
  constructor(props) {
    super(props);
    this.state = {
      signHead: '',
      formTabs: [
        {left: 0},
        {left: 520},
        {left: 1040},
        {left: 1560}
      ],
      navId: [
          'firstNav',
          '','',''
      ],
      navClass: [
          'navigator',
          'navigator',
          'navigator',
          'navigator',
      ],
      prevBtnClass: 'btnHide',
      nextBtnClass: 'signupBtn',
      submitBtnClass: 'btnHide',
      signVals: {},
      error: [],
      completed: [],
      show: 'hide',
      count: 3,
      firstName:'',
      lastName:'',
      address:'',
      password:'',
      confirmPassword:'',
      email:'',
      companyName:'',
      monthlyIncome:'',
      companyAddress:'',
      bankName:'',
      bvn:'',
      accountNumber:''

    }
  }
    render(){
        return(
            <div id="backgroundSignUser" className={this.props.signBackground}>
                <div id="signHead" className={this.props.signHead}>
                    <div className="signToggle" id="loginHead" onClick = {this.handleToggleSignin}>LOG IN</div>
                    <div className="signToggle" onClick = {this.handleToggleSignup}>SIGN UP</div>
                </div>
                <div id="signContent" className={this.props.signContent}>
                    <p id="formPTag">{this.props.ptag}</p>
                    <span id="outerClose" onClick = {this.handleclose}>
                        <span id="closeLogin">+</span>
                    </span>
                    <Login classname={this.props.login} loginUser = {this.props.loginUser}/>
                    <form action="" id="signupForm" className={this.props.signup}>
                        <div id={(this.props.isLoggedIn === 'true') ? "successDiv": 'successInDiv'}>Signup successful !</div>       
                        <div id="tabContent">
                            <Tab getval = {this.getval} getVals = {this.bringSignValues} 
                            cls = {'l' + this.state.formTabs[0].left} ptag = 'Personal Info:' label1 = 'first Name' 
                            error1 = 'invalid name'
                            label2 = 'last Name' error2 = 'invalid lastName' 
                            label3 = 'address' error3 = 'invalid address'
                            name1='firstName' name2='lastName' name3= 'address'
                            recordError = {this.handleTabError} removeError = {this.handleRemoveError}
                            />
                            <Tab getval = {this.getval} getVals = {this.bringSignValues} 
                            cls = {'l' + this.state.formTabs[1].left} ptag = 'Account Setup:' label1 = 'email' 
                            error1 = 'invalid email' type = 'password'
                            label2 = 'password' error2 = 'invalid password' 
                            label3 = 'confirm password' error3 = 'password not matching' removeError = {this.handleRemoveError}
                            name1='email' name2='password' name3= 'confirmPassword' recordError = {this.handleTabError}
                            />
                            <Tab getval = {this.getval} getVals = {this.bringSignValues} 
                            cls = {'l' + this.state.formTabs[2].left} ptag = 'Employment details:' label1 = 'company name' 
                            error1 = 'invalid name'
                            label2 = 'monthly income' error2 = 'invalid amount' 
                            label3 = 'company address' error3 = 'invalid address'
                            name1='companyName' name2='monthlyIncome' name3= 'companyAddress'
                            recordError = {this.handleTabError} removeError = {this.handleRemoveError}
                            />
                            <Tab getval = {this.getval} getVals = {this.bringSignValues} 
                            cls = {'l' + this.state.formTabs[3].left} ptag = 'Bank Details:' label1 = 'Bank Name' error1 = 'invalid name'
                            label2 = 'BVN' error2 = 'invalid BVN' label3 = 'Account number'
                            error3 = 'invalid account number'
                            name1='bankName' name2='bvn' name3= 'accountNumber'
                            recordError = {this.handleTabError} removeError = {this.handleRemoveError}
                            />
                        </div>
                        <div className = {this.state.show}>fill all fields</div>
                        <div className = 'errorRes2'>{(this.props.error.signinerror) ? this.props.error.signinerror : ''}</div>
                        <div id="navigators">
                            <div ref = {this.first} className={this.state.navClass[0]} onClick = {this.handleClickNavigation}  
                            id={this.state.navId[0]}></div>
                            <div ref = {this.second} className={this.state.navClass[1]} onClick = {this.handleClickNavigation}  
                            id={this.state.navId[1]}></div>
                            <div ref = {this.third} className={this.state.navClass[2]} onClick = {this.handleClickNavigation}  
                            id={this.state.navId[2]}></div>
                            <div ref = {this.fourth} className={this.state.navClass[3]} onClick = {this.handleClickNavigation} 
                            id={this.state.navId[3]}></div>
                        </div>
                        <hr></hr>
                        <div id="btns">
                            <button className={this.state.prevBtnClass} onClick ={this.handleClickPrev}> PREVIOUS</button>
                            <button id="signupBtn" className={this.state.submitBtnClass} onClick={this.handleSubmit}> SUBMIT</button>
                            <button className={this.state.nextBtnClass} onClick = {this.handleClickNext}> NEXT</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
    getval = (name, value) => {
        this.setState({[name]:value})
        console.log('set ',name, ' ', value)
    }
    bringSignValues = (state) => {
        const initialVals = this.state.signVals;
        this.setState({
            signVals: {
                ...initialVals,
                ...state
            }
        })
    }
    // dispatchAc = () => {
    //     console.log('clicked')
    //     this.props.dispatch({type: 'CHANGE_LOGIN'})
    // }
    handleSubmit = async (e) => {
        e.preventDefault();
        const credentiaals = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            email: this.state.email,
            companyName: this.state.companyName,
            monthlyIncome: this.state.monthlyIncome,
            companyAddress: this.state.companyAddress,
            bankName: this.state.bankName,
            bvn: this.state.bvn,
            accountNumber: this.state.accountNumber
        }
        console.log(credentiaals, 'credentials');
        if(this.state.completed.length === 12){
            this.setState({ show: 'hide' });
            const error = await this.props.signuser(credentiaals);
            if(error !== 'error') setTimeout(() => {this.props.loginUser('user');}, 1000);
        } else {
            this.setState({ show: 'errorRes' });
        }
    }
    handleclose = () => {
        this.props.handleUserBackground('signBackgroundHide')
        this.props.handleUserForm('signcontentHide', 'signheadHide');
    }
    handleToggleSignin = () => {
        this.props.handleToggleForm('loginShow', 'signupHide', 'LOG IN')
    }
    handleLogin = (e) => {
      e.preventDefault();
      this.props.loginUser('user');
      console.log(this.props)
    }
    handleToggleSignup = () => {
        this.props.handleToggleForm('loginHide', 'signupShow', 'SIGN UP');
    }
    handleClickNext = (e) => {
        e.preventDefault();
        if(this.state.error.length !== 0) return;
        if(!(this.state.completed.length >= this.state.count) ){
            this.setState({
                show: 'errorRes'
            });
            return;
        } else {
            this.setState({
                show: 'hide'
            })
        }
        const newstate = this.state.formTabs.map(item => {
            if(this.state.formTabs[0].left !== -1560) {
                const front = this.state.formTabs.findIndex(item => item.left === 0)
                const navfront = ['','','',''];
                const navOpen = this.state.navClass;
                navOpen[front] = 'navigatorOpen';
                navOpen[front+1] = 'navigatorOpen';
                navfront[front+1] = 'firstNav';
                this.setState({
                    count: this.state.count+3,
                    navId: navfront,
                    navClass: navOpen
                });
                return {left: item.left-520}
            }
            return item;
        })
        console.log(newstate)
        this.setState({
            formTabs: newstate
        })
        setTimeout(() => {
            if(this.state.formTabs[1].left === 0) {
                this.setState({prevBtnClass: 'signupBtn'})
            }
            if(this.state.formTabs[3].left === 0) {
                this.setState({nextBtnClass: 'btnHide'})
                this.setState({submitBtnClass: 'signupBtn'})
            }
        }, 10)
    }
    handleClickPrev = (e) => {
        e.preventDefault();
        if(this.state.error.length !== 0) return;
        const front = this.state.formTabs.findIndex(item => item.left === 0)
                const navfront = ['','','',''];
                navfront[front-1] = 'firstNav';
        const newstate = this.state.formTabs.map(item => {
            this.setState({
                count: this.state.count-3,
                navId: navfront
            });
            return {left: item.left+520}
        })
        console.log(newstate)
        this.setState({
            formTabs: newstate
        })
        setTimeout(() => {
            if(this.state.formTabs[0].left === 0) {
                this.setState({prevBtnClass: 'btnHide'}); 
            }
            if(this.state.formTabs[3].left === 0) {  
                this.setState({submitBtnClass: 'signupBtn'})
            }
            if(this.state.formTabs[2].left === 0) {
                this.setState({nextBtnClass: 'signupBtn'});
                this.setState({submitBtnClass: 'btnHide'})
            }
        }, 10)
    }
    handleTabError = (err, comp) => {
        console.log(err,'tru')
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
    componentDidUpdate(){
        console.log(this.state, 'newest');
    }
    handleClickNavigation = (e) => {
        if(e.target === this.first.current) {
            if(this.state.error.length !== 0) return;
            console.log(e.target)
            console.log(this.third.current.className)
                const navfront = ['firstNav','','',''];
            this.setState({
                formTabs: [{left: 0},{left: 520},{left: 1040},{left: 1560}
              ], navId: navfront, count:3,prevBtnClass: 'btnHide',
              nextBtnClass: 'signupBtn', submitBtnClass: 'btnHide'
            })
        } else if (e.target === this.second.current) {
            if(this.state.error.length !== 0) return;
            if(!(this.state.navClass[1] === 'navigatorOpen')) return
            console.log(e.target)
            const navfront = ['','firstNav','',''];
            this.setState({
                formTabs: [{left: -520},{left: 0},{left: 520},{left: 1040}
              ], navId: navfront, count:6, prevBtnClass: 'signupBtn',
              nextBtnClass: 'signupBtn', submitBtnClass: 'btnHide'
            })
        } else if (e.target === this.third.current){
            if(this.state.error.length !== 0) return;
            if(!(this.state.navClass[2] === 'navigatorOpen')) return
            const navfront = ['','','firstNav',''];
            this.setState({
                formTabs: [{left: -1040},{left: -520},{left: 0},{left: 520}
              ], navId: navfront, count:9, prevBtnClass: 'signupBtn',
              nextBtnClass: 'signupBtn', submitBtnClass: 'btnHide'
            })
        } else {
            if(this.state.error.length !== 0) return;
            if(!(this.state.navClass[3] === 'navigatorOpen')) return
            const navfront = ['','','','firstNav'];
            this.setState({
                formTabs: [{left: -1560},{left: -1040},{left: -520},{left: 0}
              ], navId:navfront, count:12, prevBtnClass: 'signupBtn',
              nextBtnClass: 'btnHide', submitBtnClass: 'signupBtn'
            })
        }
    }
}

export default connect(state => state, { signuser })(UserSign);