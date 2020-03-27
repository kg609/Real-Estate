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
                    <a className="navbar-brand" href="#">Navbar</a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="">
                            <ul className="navbar-nav">
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
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>      
        );
    }
};

export default Navbar;