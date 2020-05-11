import React from 'react';
import ReactDOM from 'react-dom';


function AddPropertyForm() {
    return (
        <div className="container">
            <form action="ManagePropertiesController.php" method="post" >
                {/* <!-- Modal --> */}
                <div className="modal fade" id="divAddPropertyModal" tabindex="-1" role="dialog" aria-labelledby="divAddPropertyModalTitle" aria-hidden="true">
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
                                <input type="text" className="form-control form-control-lg" />
                            </div>

                            <div className="form-group">
                                <label className="mb-2">
                                    Price                              
                                </label>
                                <input type="number" className="form-control form-control-lg"  />
                            </div>  

                            <div className="form-group">
                                <label className="mb-2">
                                    Zip code                             
                                </label>
                                <input type="number" className="form-control form-control-lg"  />
                            </div>            

                            <div className="form-group">
                                <label className="mb-2">
                                    Property type
                                </label>
                                <select className="form-control form-control-lg"  >
                                    <option>Please select</option>
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
                        <button type="submit" className="btn btn-danger">Submit</button>
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