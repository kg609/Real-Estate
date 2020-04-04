import React from 'react';
import  zillowLogo from '/Users/kiwanegarner/Documents/projects/real-estate/resources/images/zillow-logo.png';

class Navbar extends React.Component {
    
    render(){
        return (
           /* Desktop navbar*/
            <div className="navbar-container">
                <nav id="mainNav" className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <div id="mobileLinks" >
                                    <li className="">
                                        <a href="/zillowhome" style={{color: "#2D74DC"}}>Homepage</a>
                                    </li>
                                    <div style={{display: "flex"}}>
                                        <li>
                                            <a href="/login" style={{color: "#2D74DC"}}>Sign in</a>
                                        </li>
                                        <li>or</li>
                                        <li>
                                            <a href="/register" style={{color: "#2D74DC"}}>Join</a>
                                        </li>
                                    </div>                            
                                </div>
                                <div id="leftNav">
                                    <li className="">
                                        <a className="" href="#">Buy </a>
                                    </li>
                                    <li className="">
                                        <a className="" href="#">Rent</a>
                                    </li>
                                    <li className="">
                                        <a className="" href="#">Sell</a>
                                    </li>
                                    <li className="">
                                        <a className="" href="#">Home Loans</a>
                                    </li>
                                    <li className="">
                                        <a className="" href="#">Agent finder</a>
                                    </li>
                                </div>
                                <div id="logoContainer">
                                    <img src={zillowLogo} alt="Zillow Logo" />
                                </div>
                                <div id="rightNav">
                                <li>
                                    <a className="" href="#">Manage Rentals</a>
                                </li>
                                <li className="">
                                    <a className="" href="#">Advertise</a>
                                </li>
                                <li className="">
                                    <a className="" href="#">Sign in</a>
                                </li>
                                <li>or</li>
                                <li className="">
                                    <a className="" href="#">Join</a>
                                </li>
                                <li className="">
                                    <a className="" href="#">Help</a>
                                </li>
                            </div>
                            </ul>
                    </div>
                </nav>
            </div>      
        );
    }
};

export default Navbar;