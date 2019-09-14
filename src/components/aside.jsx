import React from 'react';
import { Link } from 'react-router-dom';

import '../css/userDashbord.css';

class Aside extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            asideClass: 'asideClose'
        }
    }
    render(){
        const { handleUserRoute } = this.props;
        console.log(this.props.children);
        const links = this.props.children.props.children.map((eachLink, index) => {
            return (
                <a key = {index}>{eachLink}</a>
            );
        });
        return(
            <section className = {this.props.asideClass}>
                <div id="logoSpace">
                    <Link to="/" onClick={() => handleUserRoute(1)}>
                        <div className="logo" >
                            <span ><i className="fab fa-quora"></i>uick</span><span className="credit">Credit</span>
                        </div>
                    </Link>
                </div>
                {links}
            </section>
        )
    }
}

export default Aside;
