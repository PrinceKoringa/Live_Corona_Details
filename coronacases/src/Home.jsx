import React from "react";
import {NavLink} from "react-router-dom";
const Home = () =>
{
    return(
        <><br/>
        <div class="container">
        <h1 class="text-center">Live Corona Details</h1><br/>
<p style={{fontSize : "1.5rem"}}>            Our Website is Providing live information about Active Corona cases,
            Recover cases , Number of deaths and Confirmed cases of country wise state. It also provides Vaccine center list of any city according to pincode
            
            </p>
        </div>
        <br/><br/>
        <div class=" d-flex justify-content-center row " >
        <div class="col-md-6 d-flex justify-content-center ">
        <button class="btn btn-light shadow-lg p-3 mb-5 bg-white rounded" >
        <NavLink className="nav-link" to="/liveCases"><h5 >Click for live CoronaCases</h5></NavLink>

        </button></div>
        <div class="col-md-6 " >
        <button class="btn btn-light shadow-lg p-3 mb-5 bg-white rounded">
        <NavLink className="nav-link" to="/vaccineCenters"><h5>Click for vaccinecenters list</h5></NavLink>
        </button></div>
        </div>
        </>
    );
};

export default Home;