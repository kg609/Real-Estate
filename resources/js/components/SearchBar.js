import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {searchInfo: ""};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({searchInfo: event.target.value});
      }
    
      handleSubmit(event) {
        alert("This was the info submitted: " + this.state.searchInfo);
        event.preventDefault();
      }
    
    render(){
        return (
            <div className="HomePageImgs">
                <div className="homeSearchContainer">
                    <h1>Reimagine home</h1>
                    <p style={{textAlign: "center", fontSize: "20px", color: "#fff", margin: "20px 0"}}>We'll help you find a place you'll love.</p>
                    <div className="search-container">
                        <form className="searchForm">
                            <input type="text" placeholder="Enter an address neighborhood, city, or ZIP code" name="search" onChange={this.handleChange} />
                            <i className="fa fa-search" onClick={this.handleSubmit}></i>
                        </form>
                    </div>
                </div>

                <a href="#infoCard"><i className="fa fa-arrow-down" ></i></a>
            </div>
        );
    };
}

export default SearchBar;