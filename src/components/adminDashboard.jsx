import React from 'react';
import { connect } from 'react-redux';

import LoancardsInfo from './loaninfoCards.jsx';
import LoanCard from './loanCards.jsx';
import { modalCall } from '../redux/actions/user.jsx';


class AdminDashboard extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            loans: [],
            targetLoan: ''
        }
    }

    render() {
        return(
            <section id="userDashbord">
                <LoancardsInfo />
                <div id="repaymentTable">
                    <div id="repaymentHead">
                        <p>Loan Applications</p>
                    </div>
                    <div id="repaymentBody">
                        <div class="repayment">
                            <div id="largeHead">
                                <p class="tableheads1">Current</p>
                                <p class="tableheads1">Date Applied</p>
                                <p class="tableheads1">Loan Amount</p>
                                <p class="tableheads1">Monthly installments</p>
                                <p class="tableheads1">Repayment Deadline</p>
                                <p class="tableheads1">Status</p>
                            </div>
                            {/*  */}
                            {(!this.state.loans.length) ? <p style={{ width: '100%', textAlign: 'center' }}>No applications yet</p> : this.state.loans.filter(each => each.status === 'pending').map( eachLoan => <LoanCard removeLoan={this.removeLoan} type="dashboard" clickedCard={this.state.targetLoan} loan={eachLoan} toggleOpen={this.controlCardToggle}/>)}
                            {/*  */}
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    componentDidMount() {
       
        const url = 'https://quickcreditgilli.herokuapp.com/api/v1/loans';
        const request = new Request(url, {
          method: 'GET',
          headers: new Headers({ 'Content-type': 'application/json', Authorization: localStorage.getItem('auth'), Accept: 'application/json,text/plain,*/*' }),
        });
        fetch(request).then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw Error(res.statusText);
        }).then((obj) => {
          console.log(obj);
          if(obj.data) {
            this.setState({
                loans: obj.data
            })
          } else {
            this.setState({
                loans: obj.error
            })
          }
        }).catch(err => console.log(err));
    }

    handleClick = (e) => {
        console.log(e.target);
        console.log('clicked');
    }
    removeLoan = (id) => {
        const { loans } = this.state;
        const newLoans = loans.filter( loan => id !== loan.id);

        this.setState({loans: newLoans});
    }

    controlCardToggle = (loanid) => {
        if(loanid === this.state.targetLoan) {
            this.setState({targetLoan: ''})
            return;
        }
        this.setState({targetLoan: loanid})
    };
}

export default connect( state => state, { modalCall } )(AdminDashboard);