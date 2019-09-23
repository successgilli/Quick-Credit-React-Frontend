import React from 'react';

import LoanApplicationCard from "./LoanApplicationCard.jsx";

class LoanCard extends React.Component {
    acceptCard = React.createRef();
    reject = React.createRef();

    constructor(props){
        super(props);
        this.state = {
            loanid: this.props.loan.id,
            repayments: [],
            clicked: false,
            isFetched: false
        };
    }

    handleClicked = (e) => {
        const { type } = this.props;
        if (type !== 'dashboard') {
            if(!this.state.isFetched){
            const url = `https://quickcreditgilli.herokuapp.com/api/v1/loans/${this.state.loanid}/repayments`;
            const request = new Request(url, {
              method: 'GET',
              headers: new Headers({ 'Content-type': 'application/json', Authorization: localStorage.getItem('auth'), Accept: 'application/json,text/plain,*/*' }),
            });
            fetch(request).then((res) => {
              if (res.ok) {
                return res.json();
              }
            }).then((obj) => {
              let empty = false;
              if (obj.data.length === 0) {
                empty = true;
              }
              this.setState({isFetched: true});
              this.setState({ repayments: obj.data })
            }).catch(err => console.log(err));
            }
            this.props.toggleOpen(this.state.loanid);
        }
        if (type === 'dashboard') if (e.target !== this.acceptCard.current.lastChild.lastChild.firstChild && e.target !== this.acceptCard.current.lastChild.lastChild.lastChild) this.props.toggleOpen(this.state.loanid);

        
    }

    handleStatus = (status) => {
        switch(status){
            case 'approved':
                return "statusDiv current";
            case 'pending':
                return "statusDiv pending";
            case 'rejected':
                return "statusDiv rejected";
            default:
                return "statusDiv done"
        }
    }

    handleRenderInfo = (repayments, type) => {
        const { loan, removeLoan } = this.props;
        if(type === 'dashboard'){
            return (
                <div ref={this.acceptCard}>
                    <LoanApplicationCard loan={loan} removeLoan={removeLoan} />
                </div>
            )
        }
        return (
            <div>
                <div className="repaywidehead">
                    <div className="repayHeads"><p className="repayHeads3">Date paid</p></div>
                    <div className="repayHeads"><p className="repayHeads3">Amount paid</p></div>
                    <div className="repayHeads"><p className="repayHeads3">Monthly installments</p></div>
                    <div className="repayHeads"><p className="repayHeads3">loan amount</p></div>
                    <div className="repayHeads"><p className="repayHeads3">balance</p></div>
                </div>
                    {
                        this.state.repayments.length === 0 ? <p className="pt">No repayments for this loan</p> : repayments
                    }
            </div>
        )
    }

    render() {
        const { type } = this.props; 
        const repayments = this.state.repayments.map(eachRepayment => (
            <div className="repayDetails">
                <div className="repayHeads"><p className="repayHeads1">Date paid</p><p className="repayHeads2">{eachRepayment.createdon.split('T')[0]}</p></div>
                <div className="repayHeads"><p className="repayHeads1">Amount paid</p><p className="repayHeads2">&#8358; {eachRepayment.amount}</p></div>
                <div className="repayHeads"><p className="repayHeads1">Monthly installments</p><p className="repayHeads2">&#8358; {this.props.loan.paymentinstallment}</p></div>
                <div className="repayHeads"><p className="repayHeads1">loan amount</p><p className="repayHeads2">&#8358; {this.props.loan.amount}</p></div>
                <div className="repayHeads"><p className="repayHeads1">balance</p><p className="repayHeads2">&#8358; {this.props.loan.balance}</p></div>
            </div>
        ));
        return (
            <div onClick={this.handleClicked}>
                <div className="repaymentTableHead">
                    <div className="tableHeads statusContainer"><div className={this.handleStatus(this.props.loan.status)}></div></div>
                    <div className="tableHeads"><p className="tableHeads1">Date Applied</p><p className="tableHeads2">{this.props.loan.createdon.split('T')[0]}</p></div>
                    <div className="tableHeads"><p className="tableHeads1">Loan Amount</p><p className="tableHeads2">&#8358; {this.props.loan.amount}</p></div>
                    <div className="tableHeads"><p className="tableHeads1">Monthly installments</p><p className="tableHeads2">&#8358; {this.props.loan.paymentinstallment}</p></div>
                    <div className="tableHeads"><p className="tableHeads1">Repayment Deadline</p><p className="tableHeads2">{'not yet'}</p></div>
                    <div className="tableHeads"><p className="tableHeads1">Status</p><p className="tableHeads2">{this.props.loan.status}</p></div>
                </div>
                <div className={(this.props.clickedCard === this.state.loanid) ? "moreInfoShow" : "moreInfo" }>
                    <p>{ type === 'dashboard' ? 'Loan info' : 'Repayment History for This Loan'}</p>
                    { this.handleRenderInfo(repayments, type)}
                </div>
            </div>
        )
    }
}

export default LoanCard;