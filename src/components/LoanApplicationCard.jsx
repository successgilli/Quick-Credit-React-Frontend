import React from 'react';

import Modal from './modal.jsx';
import { modalCall } from '../redux/actions/user.jsx';
import { connect } from 'react-redux';

import '../css/appCards.css';

const LoanApplicationCard = ({ loan, modalCall, removeLoan }) => {
    const approveLoan = (status) => {
        modalCall({show: true});
        const url = `https://quickcreditgilli.herokuapp.com/api/v1/loans/${loan.id}`;
        const request = new Request(url, {
          method: 'PATCH',
          body:JSON.stringify({status}),
          headers: new Headers({ 'Content-type': 'application/json', Authorization: localStorage.getItem('auth'), Accept: 'application/json,text/plain,*/*' }),
        });
        fetch(request).then((res) => {
          if (res.ok) {
            return res.json();
          }
          return res.json();
        }).then((obj) => {
            if (obj.status >= 400) {
                modalCall({show: false, btnText: 'Close', displayText: `${obj.error}`, handleClick: () =>  modalCall({show: true})});
                return;
            }
            modalCall(
                {
                    show: false, 
                    btnText: 'Ok', 
                    displayText: (status === 'approve') ? `You approved the loan of ${loan.email} with amount ₦${obj.data.loanAmount}` : `You rejected the loan of ${loan.email} with amount ₦${obj.data.loanAmount}`,
                    handleClick: () => {
                        modalCall({show: true})
                    }
                }
            );
            removeLoan(obj.data.loanId);
        }).catch(err => {
            modalCall({show: false, btnText: 'Close', displayText: `${err.message}`, handleClick: () =>  modalCall({show: true})})
        })
    }
    
    const handleClick = (status) => {
        modalCall({show: false, btnText: 'Yes', displayText: 'Do you want to ' + status + ` the loan of ${loan.amount} for user ${loan.email} ?`, handleClick: () => approveLoan(status)});
    }
    return (
        <div>
            <div class="loan">
                <div class="head"><p class="head1">user</p><p class="head2">{loan.email}</p></div>
                <div class="head"><p class="head1">Loan Id</p><p class="head2">{loan.id}</p></div>
                <div class="head"><p class="head1">balance</p><p class="head2">&#8358; {loan.balance}</p></div>
                <div class="head"><p class="head1">interest</p><p class="head2">&#8358; {loan.interest}</p></div>
            </div>
            <div class="acceptRejectBtn"><button onClick={() => handleClick('approve')} class="accept">Accept</button><button onClick={() => handleClick('reject')} class="reject">Reject</button></div>
        </div>
    )
}

export default connect(state => state, { modalCall } )(LoanApplicationCard);
