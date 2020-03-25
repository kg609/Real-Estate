import React, { Component } from 'react';

class SearchBar extends Component {
    
    render(){
        return (
            <div className="HomePageImgs">
                <h1>Find your way home</h1>

                <div className="search-container">
                    <form className="searchForm">
                        <input type="text" placeholder="Enter an address neighborhood, city, or ZIP code" name="search"/>
                        <button type="submit" className="search-button">Search</button>
                        <i className="fa fa-search "></i>
                    </form>
                </div>
            </div>
        );
    };
}

export default SearchBar;