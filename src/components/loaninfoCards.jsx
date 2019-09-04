import React from 'react';

class Loancards extends React.Component{
    render(){

        return (
            <div id="loanInfo">
                <div id="loanInfo1">
                    <div class="loanInfo" id="totalLoans"><p>TOTAL LOANS</p><p>10</p></div>
                    <div class="loanInfo" id="approvedLoans"><p>APRROVED LOANS</p><p>6</p></div>
                </div>
                <div id="loanInfo2">
                    <div class="loanInfo" id="pendingLoans"><p>PENDING LOANS</p><p>1</p></div>
                    <div class="loanInfo" id="rejectedLoans"><p>REJECTED LOANS</p><p>3</p></div>
                </div>
            </div>
        )
    }
}

export default Loancards;
