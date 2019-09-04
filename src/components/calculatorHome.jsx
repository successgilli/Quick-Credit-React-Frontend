import React from 'react';

class Calculator extends React.Component{
    tenor = React.createRef()
    amount = React.createRef()
    constructor(props){
        super(props);
        this.state = {
            amount: '₦ 10,000.00',
            totalRepayment: '₦ 10, 500.00',
            monthlyRepayment: '₦ 10,000.00',
            interest: "₦ 500.00",
            repaymentDate: 'May 28, 2009',
            tenore: '1 Month(s)'
        }
    }
    
    render(){
        return(
            <div className="CalculatedValues">                 
                <div className="calculatedFromForm">
                    <h3> Loan Calculator</h3>
                    <div className="calcinput">
                        <div>
                            <h4>Loan Amount:</h4>
                            <select ref = {this.amount} onChange={this.handleAmountChange} name="" id="homeAmountDropDown">
                                <option value="10,000.00">&#8358;10,000.00</option>
                                <option value="20,000.00">&#8358;20,000.00</option>
                                <option value="30,000.00">&#8358;30,000.00</option>
                                <option value="40,000.00">&#8358;40,000.00</option>
                                <option value="50,000.00">&#8358;50,000.00</option>
                                <option value="60,000.00">&#8358;60,000.00</option>
                                <option value="70,000.00">&#8358;70,000.00</option>
                                <option value="80,000.00">&#8358;80,000.00</option>
                                <option value="90,000.00">&#8358;90,000.00</option>
                                <option value="100,000.00">&#8358;100,000.00</option>
                            </select>
                        </div>
                        <div>
                            <h4>Over How Many Months?</h4>
                            <select ref={this.tenor} onChange ={this.handleTenorChange} name="" id="homeTenorDropDown">
                                <option value="1">1 Months</option>
                                <option value="2">2 Months</option>
                                <option value="3">3 Months</option>
                                <option value="4">4 Months</option>
                                <option value="5">5 Months</option>
                                <option value="6">6 Months</option>
                                <option value="7">7 Months</option>
                                <option value="8">8 Months</option>
                                <option value="9">9 Months</option>
                                <option value="10">10 Months</option>
                                <option value="11">11 Months</option>
                                <option value="12">12 Months</option>
                            </select>
                        </div>
                    </div>    
                    <div className="calculated">
                        <div>
                            <h4>Loan Amount</h4>
                            <span>{this.state.amount}</span>
                        </div>
                        <div>
                            <h4>Loan Duration</h4>
                            <span>{this.state.tenore}</span>
                        </div>
                    </div>
                    <div className="calculated">
                        <div>
                            <h4>Repayment Date</h4>
                            <span>{this.state.repaymentDate}</span>
                        </div>
                        <div>
                            <h4>Interest</h4>
                            <span>{this.state.interest}</span>
                        </div>
                    </div>
                    <div className="calculated">
                        <div>
                            <h4>Monthly Repayment</h4>
                            <span>{this.state.monthlyRepayment}</span>
                        </div>
                        <div>
                            <h4>Total Repayment</h4>
                            <span>{this.state.totalRepayment}</span>
                        </div>
                    </div>
                    <button id="homeCalcApplyBtn" onClick = {this.handleClickSignup}>APPLY NOW</button>
                </div>
            </div>
        )
    }
    componentDidMount(){
        let currentDate = new Date();
        let newDate = new Date();
        newDate.setMonth(currentDate.getMonth()+1);
        this.setState({
            repaymentDate: newDate.toDateString()
        })
    }
    handleAmountChange = (e) => {
        let currentDate = new Date();
        let amountVal = this.getMoneyValue(this.amount.current.options[this.amount.current.options.selectedIndex].value);
        let interestAmount = 0.05* amountVal;
        let tenorVal = Number(this.tenor.current.options[this.tenor.current.options.selectedIndex].value);
        let totalMoney = amountVal + interestAmount;
        let monthlyMoney = totalMoney/tenorVal;
        let newDate = new Date();
        newDate.setMonth(currentDate.getMonth()+Number(this.tenor.current.options[this.tenor.current.options.selectedIndex].value));
        this.setState({
            totalRepayment: '₦' +this.toMoneyString(totalMoney),
            interest: '₦' + this.toMoneyString(interestAmount),
            monthlyRepayment: '₦' +this.toMoneyString(monthlyMoney),
            amount: '₦' + this.amount.current.options[this.amount.current.options.selectedIndex].value,
            tenore: this.tenor.current.options[this.tenor.current.options.selectedIndex].value + ' Month(s)',
            repaymentDate: newDate.toDateString()
        })
    }
    handleTenorChange = (e) => {
        console.log(this.props, ' props');
        const amount = this.amount.current;
        const tenor = this.tenor.current;
        let currentDate = new Date();
        let amountVal = this.getMoneyValue(amount.options[amount.options.selectedIndex].value);
        let interestAmount = 0.05* amountVal;
        let tenorVal = Number(tenor.options[tenor.options.selectedIndex].value);
        let totalMoney = amountVal + interestAmount;
        let monthlyMoney = totalMoney/tenorVal;
        let newDate = new Date();
        newDate.setMonth(currentDate.getMonth()+Number(tenor.options[tenor.options.selectedIndex].value));
        this.setState({
            totalRepayment: '₦' +this.toMoneyString(totalMoney),
            interest: '₦' + this.toMoneyString(0.05*this.getMoneyValue(amount.options[amount.options.selectedIndex].value)),
            monthlyRepayment: '₦' +this.toMoneyString(monthlyMoney),
            amount: '₦' + amount.options[amount.options.selectedIndex].value,
            tenore: tenor.options[tenor.options.selectedIndex].value + ' Month(s)',
            repaymentDate: newDate.toDateString()
        })
    }
    getMoneyValue = (money) => {
        switch (money) {
          case '10,000.00':
            return 10000;
          case '20,000.00':
            return 20000;
          case '30,000.00':
            return 30000;
          case '40,000.00':
            return 40000;
          case '50,000.00':
            return 50000;
          case '60,000.00':
            return 60000;
          case '70,000.00':
            return 70000;
          case '80,000.00':
            return 80000;
          case '90,000.00':
            return 90000;
          case '100,000.00':
            return 100000;
        }
    }
    toMoneyString = (amount) => {
        let mainAmount = String(amount);
        let stringAmount = String(parseInt(amount));
        let amountLength = stringAmount.length;
        if (amountLength === 4) {  
          return stringAmount.charAt(0).concat(',').concat(mainAmount.substr(1));
        } else if (amountLength === 5) {
          return stringAmount.substr(0,2).concat(',').concat(mainAmount.substr(2));
        } else if (amountLength === 6) {
          return stringAmount.substr(0,3).concat(',').concat(mainAmount.substr(3));
        } else {
          return amount;
        }
      }
      handleClickSignin = () => {
        this.props.handleUserBackground('signBackgroundShow');
        this.props.handleToggleForm('loginShow', 'signupHide', 'LOG IN') 
        setTimeout(()=> {
            this.props.handleUserForm('signcontentShow', 'signheadShow');
        })
    }
    handleClickSignup = (e) => {
        this.props.handleToggleForm('loginHide', 'signupShow','SIGN UP');
        this.props.handleUserBackground('signBackgroundShow');
        setTimeout(()=> {
            this.props.handleUserForm('signcontentShow', 'signheadShow');
        })
    }
}

export default Calculator;


