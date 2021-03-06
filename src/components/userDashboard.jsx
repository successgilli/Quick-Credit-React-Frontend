import React from 'react';
import { connect } from 'react-redux';

import '../css/userDashbord.css';
import LoancardsInfo from './loaninfoCards.jsx';
import LoanCard from './loanCards.jsx';


class UserDashboard extends React.Component{

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
                        <p>Repayment History</p>
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
                            {(typeof this.state.loans === 'string') ? <p style={{ width: '100%', textAlign: 'center' }}>{this.state.loans}</p> : this.state.loans.map( eachLoan => <LoanCard clickedCard={this.state.targetLoan} loan={eachLoan} toggleOpen={this.controlCardToggle}/>)}
                            {/*  */}
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    componentDidMount() {
        const url = 'https://quickcreditgilli.herokuapp.com/api/v1/loans/user';
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
    }

    controlCardToggle = (loanid) => {
        if(loanid === this.state.targetLoan) {
            this.setState({targetLoan: ''})
            return;
        }
        this.setState({targetLoan: loanid})
    };
}

export default connect( state => state )(UserDashboard);