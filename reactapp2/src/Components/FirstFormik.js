import react from 'react';

function FirstFormik(){
    return(
        <>
 <div className="container mt-4">
                <form>
                    <div className="row mb-3">
                        <label htmlFor="name" className="col-sm-2 col-form-label" >Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="name " />

                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="desc" className="col-sm-2 col-form-label">Description</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="desc" name="desc" ></textarea>


                        </div>
                    </div>

                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label" htmlFor="price">Price</label>
                        <div className="col-sm-10">
                            <div className="input-group">
                                <div className="input-group-text">$</div>
                                <input type="text" className="form-control" id="price" placeholder="price" name="price" />

                            </div>
                        </div>

                    </div>

                    <div className="row mb-3">
                        <label htmlFor="stock" className="col-sm-2 col-form-label">Stock</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="stock" name="stock" />
                        </div>
                    </div>

                   
                    <div className="row mb-3">
                        <label htmlFor="category" className="col-sm-2 col-form-label">Category</label>
                        <div className="col-sm-10">
                            <select className="form-select inputTag">
                        <option>one</option>
                        <option>Two</option>
                        <option>Three</option>
                            </select>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="id" className="col-sm-2 form-check-label">Id Required</label>
                        <div className="col-sm-10">
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="id"  name="id" />
                            </div>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="prescription" className="col-sm-2 form-check-label">Is Prescription Required</label>
                        <div className="col-sm-10">

                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="prescription" name="prescription"  />
                            </div>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="recommended" className="col-sm-2 form-check-label">Is it Recommneded</label>
                        <div className="col-sm-10">

                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="recommended" name="recommended"  />
                            </div>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="non-veg" className="col-sm-2 form-check-label">Is it non-veg</label>
                        <div className="col-sm-10">

                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="nonveg" name="nonveg"  />
                            </div>
                        </div>
                    </div>
                    <div className="text-center mb-3">
                        <button className="btn btn-danger" type="submit">Submit</button>
                    </div>
                </form>
            </div>

        </>
    );
}
export default FirstFormik;