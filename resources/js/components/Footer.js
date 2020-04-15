import React from 'react';

const Footer = () => {
    return (
        <div className="footer-container">
            <nav className="group-brands">
                <ul className="brand-list">
                    <li className="brand-list-title">Zillow Group Brands:</li>
                    <li><a href="placeholder">Trulia</a></li>
                    <li><a href="placeholder">StreetEasy</a></li>
                    <li><a href="placeholder">HotPads</a></li>
                    <li><a href="placeholder">Naked Apartments</a></li>
                    <li><a href="placeholder">Real Estate.com</a></li>
                    <li><a href="placeholder">Out East</a></li>
                </ul>
            </nav>
            
            <footer>
                <nav className="nav2">
                    <ul className="nav2-links">
                        <li><a href="placeholder">ABOUT</a></li>
                        <li><a href="placeholder">ZESTIMATES</a></li>
                        <li><a href="placeholder">RESEARCH</a></li>
                        <li><a href="placeholder">CAREERS</a></li>
                        <li><a href="placeholder">HELP</a></li>
                        <li><a href="placeholder">ADVERTISE</a></li>
                        <li><a href="placeholder">TERMS OF USE & PRIVACY</a></li>
                        <li><a href="placeholder">AD CHOICE</a></li>
                        <li><a href="placeholder">BLOG</a></li>
                        <li><a href="placeholder">DATA SCIENCE</a></li>
                        <li><a href="placeholder">MOBILE APPS</a></li>
                    </ul>
                </nav>
                <hr />

                <ul className="social-media-list">
                    <i className="fa fa-home fa-2x"></i>
                    <li>&copy; 2006-2019 Zillow</li>
                    <li>Follow us</li>
                    <a href="https://www.facebook.com/Zillow"><i className="fab fa-facebook-square fa-2x social-media-icon "></i></a>
                    <a href="https://twitter.com/zillow"><i className="fab fa-twitter-square fa-2x social-media-icon "></i></a>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;