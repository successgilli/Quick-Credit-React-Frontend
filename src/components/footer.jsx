import React from 'react';
import '../css/index.css'

class Footer extends React.Component{
    render(){
        return(
            <footer>
                <a href="./index.html">
                    <div className="logo" id="footerLogo">
                        <span><i className="fab fa-quora"></i>uick</span><span className="credit">Credit</span>
                    </div>
                </a>
                <div id="footerElements">
                    <section className="footer">
                        <h3 id="footerh5">Author</h3>
                        <p>
                                Gilbert Awaji-mitop N. &nbsp; &nbsp;
                                @ 2018
                        </p>
                    </section>
                    <section className="footer">
                        <h3>Contact Us</h3>
                        <p>
                                Phone: 09057496803; &nbsp; &nbsp;
                        </p> 
                        <p>
                                Email: Successgilli@gmail.com
                        </p>
                    </section>
                    <section className="footer">
                        <h3>Follow Us</h3>
                        <p  className="footerpelem">
                            <i className="fab fa-twitter"></i> &nbsp; &nbsp;
                            <i className="fab fa-facebook-f"></i>&nbsp; &nbsp;
                            <i className="fab fa-linkedin-in"></i>&nbsp; &nbsp;
                            <i className="fab fa-google-plus-g"></i>&nbsp; &nbsp;
                        </p>
                    </section>
                </div>
            </footer>
        )
    }
}

export default Footer;