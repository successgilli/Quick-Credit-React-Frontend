import React from 'react';
import Calculator from './calculatorHome.jsx';
import '../css/index.css';

class CalcSection extends React.Component{
    render(){
        return (
            <main>
                <div className = "calculatorSection">
                    <Calculator handleToggleForm ={this.props.handleToggleForm} 
                    handleUserBackground = {this.props.handleUserBackground}
                    handleUserForm = {this.props.handleUserForm}
                    />
                </div>
            </main>
        )
    }
}
export default CalcSection;
