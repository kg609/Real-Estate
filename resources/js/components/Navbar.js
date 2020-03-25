import React from 'react';

class Navbar extends React.Component {
    
    render(){
        return (
           /* Desktop navbar*/
            <div>
                <div>
                    <nav id="mainNav">
                        <ul className="navbar">
                            <li><a href="placeholder">Buy</a></li>
                            <li><a href="placeholder">Rent</a></li>
                            <li><a href="placeholder">Sell</a></li>
                            <li><a href="placeholder">Mortgages</a></li>
                            <li><a href="placeholder">Agent finder</a></li>
                            <li><a href="placeholder">More</a></li>
                        </ul>


                        <ul className="extra-links">
                        <li><a href="placeholder">List your rental</a></li>
                        <li><a href="placeholder">Advertise</a></li>
                        <li><a href="placeholder">Sign in</a></li>
                            <li>or</li>
                        <li><a href="placeholder">Join</a></li>
                        <span className="help-link">
                            <li><a href="placeholder">Help</a></li>
                        </span>
                        </ul>
                    </nav>

                    <div className="arrow-left" ></div>   
                    <div className="img-container" >
                        Logo
                        {/* <img className="desktop-logo" src="https://www.williamsonteamproperties.com/wp-content/uploads/2016/05/zillow-profile-icon-0e6d0f.png" alt="Zillow Logo" />
                        <img className="mobile-logo" src="/resources/images/mobile-logo.jpg" alt="Zillow Logo" /> */}
                    </div>
                </div>
            </div>      
        );
    }
};

export default Navbar;