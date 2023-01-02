import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.min.js";

export default function Card(props) {
  


  return (
    <div>
      

      <div className="row">
                        <div className="col-lg-4"> 

          <div className="card mb-3">
            <img
              src="/images/background.png"
              className="card-img-top"
              alt="Card image"
              />
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          
                

            
        </div>
        
             </div></div> 
      
  );
}
