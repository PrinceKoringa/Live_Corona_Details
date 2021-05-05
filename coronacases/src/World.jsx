import React, { useEffect, useState } from "react";
import './index.css';
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from '@material-ui/core/Card';
import { shadows,color } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';

import Box from '@material-ui/core/Box';
const World = () =>
{
    const [search , SetSearch]= useState([]);
     const [country,setcountry]=useState();
  const [state,setstate]=useState();
  
  useEffect(()=>{
      async function getData()
      {
          const res=await axios (`https://api.covid19api.com/live/country/${search}/status/confirmed/date/2021-05-03T13:13:30Z`);
         
            console.log(res.data);
            console.log(state);
         var  i = 0;
        //   var statename={state}
            for(i=0;i<res.data.length;i++){
                if(res.data[i].Province===state)
                     break;
            }
            setcountry(res.data[i]);
      }
      getData();
   
  },[search,state]);
 


    return(
        <>

      
     

   <div class="d-flex justify-content-center" style={{color:"#070D91"}}>
       <h2 >Search Any Country And States </h2>
       </div>
       <div class="d-flex justify-content-center" style={{color:"#070D91"}}>
       <h3>
       We Provide live Active Corona cases And Recover Corona cases details
       </h3>
       </div>
    <div class="container">
        <div class="row">
       <div class="col-md-6">
       <input  class="form-control " type="search" 
       placeholder="Enter Country"
        onChange={(event)=>{
            SetSearch(event.target.value) ;
       }}
       />
       </div>
       <div class="col-md-6">
       <input  class="form-control " type="search" 
       placeholder="Enter state"
        onChange={(event)=>{
            setstate(event.target.value) ;
       }}
       />
       </div>
        </div>
   
    </div>
    <br/>
    <br/>
      
       {!country?(<h4 class="d-flex justify-content-center" style={{color:"red"}}>Please Enter your Proper Data </h4>):
       <>
       <div class="d-flex justify-content-center" style={{color:"#FA37B6" ,backgroundColor:"#F0E5E6"}}>
       <h1>Your Country is {search} And State is {state}</h1></div><br/><br/>
       <div class="container">
       <div class="row" style={{height:"50%"}}>
    <div class="col-md-3 " >
        
        <Card style={{height:"300px" , width:"250px",fontFamily:"italic" ,backgroundColor:"gray"}}   className="shadow-lg p-3 mb-5 bg-white rounded">
        
         <div style={{color:"gray"}}><h1>{country.Province} confirmed cases {country.Confirmed} </h1> </div>
         </Card>
         
    </div>
    <div class="col-md-3" style={{height:""}}>
        <Card style={{height:"300px" , width:"250px",fontFamily:"italic" ,backgroundColor:"gray"}}   className="shadow-lg p-3 mb-5 bg-white rounded">
        <div style={{color:"orange"}}><h1>{country.Province} Active Cases {country.Active}</h1></div>
        </Card>
    </div>
    <div class="col-md-3" style={{height:""}}>
        <Card style={{height:"300px" , width:"250px",fontFamily:"italic" ,backgroundColor:"gray"}}   className="shadow-lg p-3 mb-5 bg-white rounded">
        <div style={{color:"green"}}><h1>{country.Province} Recover cases {country.Recovered}</h1></div>
        </Card>
    </div>
    <div class="col-md-3" style={{height:""}}>
        <Card style={{height:"300px" , width:"250px",fontFamily:"italic" ,backgroundColor:"gray"}}   className="shadow-lg p-3 mb-5 bg-white rounded">
        <div style={{color:"red"}}> <h1>{country.Province} Deaths {country.Deaths}</h1></div>
        </Card>
    </div>
    
    </div>
    </div>
      
       
       
    
     
        
  
       
       
        </>
       
       
       }
     

       
        </>
    );
   
};


export default World;