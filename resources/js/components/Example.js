import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './Banner';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import InfoList from './InfoList';
import Footer from './Footer';

function Example() {
    return (
        <div className="container">
            <Navbar />
            <SearchBar />
            <Banner />
            <InfoList />
            <Footer />
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
