import React, { useEffect, useState } from "react";
import './index.css';
import axios from "axios";

const India = () =>
{
    const [search , SetSearch]= useState([]);
    const[city,setcity]=useState();
    // const [country,setcountry]=useState();
// const [state,setstate]=useState();
 
  
  useEffect(()=>{
      async function getData()
      {
          const res=await axios (`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${search}&date=03-05-2021 `);
         

          var  i = 0;
          const cowinCenter=[];
      
         for(i=0;i<res.data.centers.length;i++)
         {
            cowinCenter[i] =res.data.centers[i]
             
            
         }
          var Center="";
          var j=1;
         for(i=0;i<cowinCenter.length;i++)
           { 
          
            Center +=" " + j + " )"+ cowinCenter[i].address+". ";
            j++;
                 
           }
            setcity(Center);
        
      }           

      getData();
   
  },[search]);


 

    return(
        <>
    
    
     <br/>
       <div class="d-flex justify-content-center" style={{color:"#070D91"}}>
       <h2 >You can search here by City pincode</h2>
       </div>
       <br/>
       <div class="d-flex justify-content-center">
       <div class="col-md-3">
       <input  class="form-control " type="search" 
       placeholder="Enter pincode"
        onChange={(event)=>{
            SetSearch(event.target.value) ;
       }}
       />
        
         
        </div>
       </div>
       <br/>
      
        {!city?(<h4 class="d-flex justify-content-center" style={{color:"red"}}>Please Enter your Proper Data </h4>):<h1 style={{fontSize:"1.2rem"}}>{city}</h1> }      
       
       <>
      
       {/* {let city = this.state.city;
        city = city.map((char, index) => {
            return (
                <Character char={char} key={index}  />
            );
        }); */}

    {/* {   let city =this.city;
    
      city = city.map((value)=>{
           return(
              <>
              <h2>address={value.address}</h2>
              </> 
                 );
            });
            return(
                <div></div>
            )
        }
     */}
      

       {/* <h1>Your Country is {search} And State is {state}</h1>
       <div style={{color:"gray"}}>  <h1>{country.Province} confirmed cases {country.Confirmed}</h1></div>
       <div style={{color:"orange"}}><h1>{country.Province} Active Cases {country.Active}</h1></div>
       <div style={{color:"green"}}><h1>{country.Province} Recover cases {country.Recovered}</h1></div>
       <div style={{color:"red"}}> <h1>{country.Province} Deaths {country.Deaths}</h1></div> */}
        </>
       
       
      
    
       
     
      
        </>
    );
};

export default India;