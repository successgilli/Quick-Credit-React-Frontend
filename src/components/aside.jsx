import React from 'react';
import '../css/userDashbord.css';

class Aside extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            asideClass: 'asideClose'
        }
    }
    render(){
        console.log(this.props.children);
        const links = this.props.children.map((eachLink, index) => {
            return (
                <a key = {index}>{eachLink}</a>
            );
        });
        console.log(links, ' links')
        return(
            <section className = {this.props.asideClass}>
                <div id="logoSpace">
                    <a href="./index.html">
                        <div className="logo" >
                            <span ><i className="fab fa-quora"></i>uick</span><span className="credit">Credit</span>
                        </div>
                    </a>
                </div>
                {links}
            </section>
        )
    }
}

export default Aside;
