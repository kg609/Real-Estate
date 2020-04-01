import React from 'react';

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
                        <div className="">
                            <ul className="navbar-nav">
                            <div style={{display: "flex", justifyContent: "space-between", borderBottom: "1px solid #ddd"}}>
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
                            <li className="">
                                <a className="" href="#">Manage Rentals</a>
                            </li>
                            <li className="">
                                <a className="" href="#">Advertise</a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>      
        );
    }
};

export default Navbar;