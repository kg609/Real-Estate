import React from 'react';

const InfoList = () => {
    return (
            <div id="accordion" className="row">
                <div className="card col-lg-3 col-6" style={{padding: 0}}>
                    <div className="card-header" id="headingOne" data-toggle="collapse" data-target="#realEstateAccordion" >
                        <h5 className="mb-0">
                            <button className="btn btn-link" aria-expanded="true" aria-controls="collapseOne">
                            <span className="links-title">Real Estate</span>
                            </button>
                            <i className="fa fa-chevron-down" ></i>
                        </h5>
                    </div>

                    <div id="realEstateAccordion" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">
                        <ul className="links-list">
                            <li><a href="placeholder">Browse all homes</a></li>
                            <li><a href="placeholder">Albuquerque real estate</a></li>
                            <li><a href="placeholder">Atlanta real estate</a></li>
                            <li><a href="placeholder">Austin real estate</a></li>
                            <li><a href="placeholder">Baltimore real estate</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className="card  col-lg-3 col-6" style={{padding: 0}}>
                    <div className="card-header" id="headingTwo" data-toggle="collapse" data-target="#rentalsAccordion" >
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" aria-expanded="false" aria-controls="collapseTwo">
                                <span className="links-title">Rentals</span>
                            </button>
                            <i className="fa fa-chevron-down" ></i>
                        </h5>
                    </div>
                    <div id="rentalsAccordion" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body">
                        <ul className="links-list">
                            <li><a href="placeholder">Rental buildings</a></li>
                            <li><a href="placeholder">Atlanta apartments for rent</a></li>
                            <li><a href="placeholder">Austin apartments for rent</a></li>
                            <li><a href="placeholder">Baltimore apartments for rent</a></li>
                            <li><a href="placeholder">Boston apartments for rent</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className="card col-lg-3 col-6" style={{padding: 0}}>
                    <div className="card-header" id="headingThree" data-toggle="collapse" data-target="#mortgageRatesAccordion">
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" aria-expanded="false" aria-controls="collapseThree">
                                <span className="links-title">Mortgage Rates</span>
                            </button>
                            <i className="fa fa-chevron-down" ></i>
                        </h5>
                    </div>
                    <div id="mortgageRatesAccordion" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="card-body">
                            <ul className="links-list">
                                <li><a href="placeholder">Current mortgage rates</a></li>
                                <li><a href="placeholder">Alaska mortgage rates</a></li>
                                <li><a href="placeholder">Alabama mortgage rates</a></li>
                                <li><a href="placeholder">Arkansas mortgage rates</a></li>
                                <li><a href="placeholder">Arizona mortgage rates</a></li>
                            </ul>
                        </div>
                    </div>
                </div>           
                <div className="card col-lg-3 col-6" style={{padding: 0}}>
                    <div className="card-header" id="headingFour" data-toggle="collapse" data-target="#browseHomesAccordion">
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" aria-expanded="false" aria-controls="collapseFour">
                                <span className="links-title">Browse Homes</span>
                            </button>
                            <i className="fa fa-chevron-down" ></i>
                        </h5>
                    </div>
                    <div id="browseHomesAccordion" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                        <div className="card-body">
                            <ul className="links-list">
                                <li><a href="placeholder">California</a></li>
                                <li><a href="placeholder">Texas</a></li>
                                <li><a href="placeholder">New York</a></li>
                                <li><a href="placeholder">Florida</a></li>
                                <li><a href="placeholder">Illinois</a></li>
                                <li><a href="placeholder" className="more-link">More</a></li>  
                        </ul> 
                        </div>
                    </div>
                </div>
            </div>        
    );
}

export default InfoList;