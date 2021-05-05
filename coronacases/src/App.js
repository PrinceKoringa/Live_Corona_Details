import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from "./Home";
import India from "./India";
import World from "./World";
import {Route, Switch,NavLink} from "react-router-dom";

const App = () =>{
return(
  <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  {/* <div className="container-fluid"> */}
    <NavLink className="navbar-brand" to="#" style={{color:"blue"}}>Live Corona Details</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item ">
          <NavLink className="nav-link " aria-current="page" to="/">Home <span class="sr-only"></span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/liveCases">live Cases</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/vaccineCenters">vaccine centers</NavLink>
        </li>
      </ul>
     
     
        
    
    </div>

</nav> 
    <Switch>
      <Route exact path="/"  component={Home}/>
      <Route path="/liveCases"  component={World}/>
      <Route path="/vaccineCenters"  component={India} />
    </Switch>

  
</>
)
};

export default App;