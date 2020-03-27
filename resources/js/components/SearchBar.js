import React, { Component } from 'react';

class SearchBar extends Component {
    
    render(){
        return (
            <div className="HomePageImgs">
                <div style={{}}>
                    <h1>Reimagine home</h1>
                    <p style={{textAlign: "center", fontSize: "20px", color: "#fff", margin: "20px 0"}}>We'll help you find a placw you'll love.</p>

                    <div className="search-container">
                        <form className="searchForm">
                            <input type="text" placeholder="Enter an address neighborhood, city, or ZIP code" name="search"/>
                            <button type="submit" className="search-button">Search</button>
                            <i className="fa fa-search "></i>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
}

export default SearchBar;