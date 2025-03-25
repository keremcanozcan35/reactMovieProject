import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../css/Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p>&copy; {new Date().getFullYear()} Movie Site. All rights reserved.</p>
                    </div>
                    <div className="col-md-6">
                        <ul className="social-icons">
                            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;