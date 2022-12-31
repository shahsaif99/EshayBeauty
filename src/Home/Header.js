import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.min.js'





export default function Header(){
    
    
      return(
        
        
      <div className="background">
        <div className="main fixed-top " >

<div >

<i className="fa fa-shopping-bag logo-cart "></i>

</div>
    <nav className="navbar navbar-expand-lg ">
<div className="container-fluid mt-4 ">
<div>

<button className="navbar-toggler me-auto tog-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<i className="fa fa-bars" style={{'color':'#fff', 'font-size':'28px'}}></i>
</button>
</div>
<a className="navbar-brand me-auto logo" href="#"><img src="/images/logo2.png"/></a>
<div className="collapse navbar-collapse" id="navbarNav">

<ul className="navbar-nav ms-auto">
<li className="nav-item">
  <a className="nav-link active"  href="#"> <i className="fa fa-instagram ic-logo" aria-hidden="true"></i></a>
</li>
<li className="nav-item">
  <a className="nav-link active " href="#"><i className="fa fa-facebook-square ic-logo" aria-hidden="true"></i></a>
</li>

</ul>

</div>
</div>
</nav>

</div>
<div className="container col-12"> 
<h1 className="main-text ">All natural organic products</h1> 
<div className="sub-text ">Made with care and love</div>
        </div>
</div>
    )
}





        // my code
     
//     <div classNameName="main">
//         <nav class="navbar navbar-expand-lg ">
//    <div class="container-fluid mt-4 ">
//     <div>

// <button class="navbar-toggler me-auto tog-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//   <span class="navbar-toggler-icon tog-btn"></span>
// </button>
//     </div>
// <a class="navbar-brand me-auto" href="#">Website Logo</a>
// <div class="collapse navbar-collapse" id="navbarNav">

//   <ul class="navbar-nav ms-auto">
//     <li class="nav-item">
//       <a class="nav-link active"  href="#"> <i className="fa fa-instagram ic-logo" aria-hidden="true"></i></a>
//     </li>
//     <li class="nav-item">
//       <a class="nav-link active" href="#"><i class="fa fa-facebook-square ic-logo" aria-hidden="true"></i></a>
//     </li>
    
//   </ul>

// </div>

// <div className=" ms-auto">

//     <i class="fa fa-shopping-bag logo-cart" aria-hidden="true"></i>
    
// </div>
// </div>
// </nav>

//    <div className="main-text">Meet our new<br/> limited collection</div> 
//    <div className="sub-text">Available now</div>
//     </div>

// my code