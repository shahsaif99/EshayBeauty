import React from "react"

export default function Contact(){
    return(
        <div className="container-fluid " >
       
            <div className="row contact">
                <div className="col-md-5 ">

            <img src="https://unsplash.it/600.jpg?image=256" className="img-fluid contact-img"/>
                </div>
           
            <div className="col-md-7  form-container">
                <div className="contactus">Contact US</div>
                <form className="form">
                <div class="form-outline mb-4">
                  <label class="form-label contactform" for="formName">Name</label>
                  <input type="text" id="formName" class="form-control" />
                </div>
                <div class="form-outline mb-4">
                    <label class="form-label contactform" for="formEmail">Email address</label>
                    <input type="email" id="formEmail" class="form-control" />
                 </div>

                 <div class="form-outline mb-4 ">
                    <label class="form-label contactform" for="formMessage">Message</label>
                     <textarea class="form-control" id="formMessage" rows="4"></textarea>
                </div>
                <div class="form-check d-flex justify-content-center mb-4 subscribe">
    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
    <label class="form-check-label " for="form2Example33">
      Subscribe to our newsletter
    </label>
  </div>
<br/><br/>
  <button type="submit" class="btn btn-primary btn-block mb-4 submitbtn">Send</button>
                </form>
            </div>
            </div>

        </div>
    )
}