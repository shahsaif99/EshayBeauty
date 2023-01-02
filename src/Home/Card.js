import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.min.js";

export default function Card(props) {
  


  return (
    
      

      
                        <div className="col-lg-4"> 

          <div className="card mb-3">
            <img
              src="/images/background.png"
              className="card-img-top"
              alt="Card image"
              />
            <div className="card-body ">
              <div className="crd-txt">

              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">
                Natural whitning cream made with pure incridients such as aleovera and other things
              </p>
              </div>
              <a href="#" className="btn btn-primary card-btn">
                Go somewhere
              </a>
            </div>
          </div>

          
                

            
        </div>
        
            
      
  );
}
