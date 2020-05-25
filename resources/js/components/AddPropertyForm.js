import React, { useState } from 'react';
import ReactDOM from 'react-dom';


function AddPropertyForm() {
    const [address, setAddress] = useState("");
    const [price, setPrice] = useState(0);
    const [propertyState, setPropertyState]  = useState("");
    const [city, setCity] = useState("");
    const [zipcode, setZipcode] = useState(0);
    const [propertyType, setPropertyType] = useState("");

    const PropertyListObj = {
        "address": address,
        "price": price,
        "propertyState": propertyState,
        "city": city,
        "zipcode": zipcode,
        "propertyType": propertyType
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(`The forms current state is Address: ${address}, price: ${price}, propertyState: ${propertyState}, city: ${city}, zipcode: ${zipcode}, propertyType: ${propertyType}`);

        // Example POST method implementation:
        async function postData(url = '', data = {}) {
            // Default options are marked with *
            const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
            });
            return response.json(); // parses JSON response into native JavaScript objects
        }
        
        postData('/manage-properties', PropertyListObj)
            .then(data => {
            console.log(data); // JSON data parsed by `response.json()` call
            });

        
     }

    const handleAddress = (e) => {
        setAddress(e.target.value);
        // console.log("this is the value of the property address: " + address);
    }

    const handlePrice = (e) => {
        setPrice(e.target.value);
        // console.log("this is the value of the property price: " + price);
    }

    const handlePropertyState = (e) => {
        setPropertyState(e.target.value);
        // console.log("this is the value of the property state: " + propertyState);
    }
    
    const handleCity= (e) => {
        setCity(e.target.value);
        // console.log("this is the value of the property city: " + city);
    }

    const handleZipcode = (e) => {
        setZipcode(e.target.value);
        // console.log("this is the value of the property zipcode: " + zipcode);
    }

    const handlePropertyType = (e) => {
        setPropertyType(e.target.value);
        // console.log("this is the value of the property type: " + propertyType);
    }
    

    return (
        <div className="container">
            <form >
                {/* <!-- Modal --> */}
                <div className="modal fade" id="divAddPropertyModal" role="dialog" aria-labelledby="divAddPropertyModalTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title m-auto" id="divAddPropertyModalTitle">Add a property</h4>
                        <button  style={{margin: "0", padding: "0"}} type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <h4 className="mt-4  mb-4">Please provide your property's info.</h4>
                            <div className="form-group">
                                <label className="mb-2">
                                    Property address
                                </label>
                                <input id="propertyAddress" type="text" className="form-control form-control-lg" onChange = { handleAddress } />
                            </div>

                            <div className="form-group">
                                <label className="mb-2">
                                    Price                              
                                </label>
                                <input id="propertyPrice" type="number" className="form-control form-control-lg"  onChange = { handlePrice } />
                            </div>  

                            <div className="form-group">
                                <label className="mb-2">
                                    State
                                </label>
                                <select id="propertyState" className="form-control form-control-lg"   onChange = { handlePropertyState } >
                                    <option>Please select a state</option>
                                    <option>NC</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="mb-2">
                                    City                             
                                </label>
                                <input id="propertyCity" type="text" className="form-control form-control-lg"  onChange = { handleCity }  />
                            </div>

                            <div className="form-group">
                                <label className="mb-2">
                                    Zip code                             
                                </label>
                                <input type="number" className="form-control form-control-lg"   onChange = { handleZipcode }  />
                            </div>            

                            <div className="form-group">
                                <label className="mb-2">
                                    Property type
                                </label>
                                <select id="propertyType" className="form-control form-control-lg"  onChange = { handlePropertyType } >
                                    <option>Please select a property type</option>
                                    <option>House</option>
                                    <option>Condo / Apartment Unit</option>
                                    <option>Townhouse</option>
                                    <option>Entire Apartment Community</option>
                                </select>
                            </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                        <button type="submit" className="btn btn-danger" >Submit</button>
                    </div>
                    </div>
                </div>
                </div>               
            </form>
        </div>
    );
}

export default AddPropertyForm;

if (document.getElementById('addPropertyForm')) {
    ReactDOM.render(<AddPropertyForm />, document.getElementById('addPropertyForm'));
}