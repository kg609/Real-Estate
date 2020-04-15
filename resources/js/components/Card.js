import React from 'react';
import House from "/Users/kiwanegarner/Documents/projects/real-estate/resources/images/undraw_quite_town_mg2q.png"

const Card = () => {
    return (
        <div id="infoCard" className="row">
            <section className="col-md-4 col-sm-12">
                <div className="card">
                    <img src={House}  />
                    <div className="card-body">
                        <h3 className="card-title" style={{fontSize: "25px", fontWeight:"bold"}}>Buy a home</h3>
                           <p> Find your place with an immersice photo experience and the most
                            listings, including things you won't find anywhere else. </p>
                            <br />
                            <a  id="cardBtn" href="#" className="btn btn-light" >
                            Search homes
                        </a>
                    </div>
                </div>
            </section>

            <section className="col-md-4 col-sm-12">
                <div className="card">
                    <img src={House}  />
                    <div className="card-body">
                        <h3 className="card-title" style={{fontSize: "25px", fontWeight:"bold"}}>Sell a home</h3>
                           <p> Whether you sell with new Zillow Offers or take another 
                               approach, we'll help you navigate the path to a successful sale.  </p>
                            <br />
                            <a  id="cardBtn" href="#" className="btn btn-light" >
                            Search homes
                        </a>
                    </div>
                </div>
            </section>

            <section className="col-md-4 col-sm-12">
                <div className="card">
                    <img src={House}  />
                    <div className="card-body">
                        <h3 className="card-title" style={{fontSize: "25px", fontWeight:"bold"}}>Rent a home</h3>
                           <p> We're creating a seamless online experience - from shopping on
                               the largest rental network, to applying to paying rent. </p>
                            <br />
                            <a  id="cardBtn" href="#" className="btn btn-light" >
                            Find rentals
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Card;