import React, { useState } from 'react';
import CalculatorHome from './calculatorHome.jsx';
import fetch from 'isomorphic-fetch';
import Modal from './modal.jsx';
import '../css/userLoan.css';

const UserLoan = () => {
    const [showm, setShow] = useState(true);
    const [text, setText] = useState('');
    const [btnText, setBtntext] = useState('');
    const [loan, getLoan] = useState();

    const handleCalculatorClick = (calcState) => {
        getLoan(calcState);
        setBtntext('apply');
        console.log(calcState, 'dhh');
        console.log(showm, ' show')
        setShow(false);
        setText(`Do you want to apply for the loan of ${calcState.amount} for the period of ${calcState.tenore} ?`);
    }

    const apply = ({amount1, tenor1}) => {
        console.log(amount1, ' ', tenor1);
        const amount = String(amount1);
        const tenor = String(tenor1);
        const url = 'https://quickcreditgilli.herokuapp.com/api/v1/loans/';
        const request = new Request(url, {
            method: 'POST',
            headers: new Headers({
              'Content-type': 'application/json',
              Accept: 'application/json,text/plain,*/*',
              Authorization: localStorage.getItem('auth'),
            }),
            body: JSON.stringify({ amount, tenor }),
          });
          fetch(request).then((res) => {
            if (res.ok) {
              return res.json();
            } if (res.status === 409) {
              throw Error('you have a loan in progress');
            }
            throw Error(res.statusText);
          }).then((obj) => {
            setShow(false);
            setBtntext('Ok');
            setText(`application for the amount ₦ ${obj.data.amount} was successful`);
          }).catch((err) => {
            console.log('dhit')
            console.log(err);
            setShow(false);
            setBtntext('Ok');
            setText(err.message);
          });
    }
 
    const applyClick = () => { apply(loan); setShow(true) };
    const closeRes = () => setShow(true);

    return (
        <section id="userLoanApply">
            <Modal show={showm} btnText={btnText} displayText={text} click={() => setShow(true)} handleClick={ btnText === 'Ok' ? closeRes : applyClick} />
        <CalculatorHome do = {(calState) => handleCalculatorClick(calState)} classname="calculatedFromFormUser" />
    </section>
    )
};

export default UserLoan;
