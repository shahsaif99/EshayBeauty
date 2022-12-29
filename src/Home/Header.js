import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.min.js'




export default function Header(){
    
    
      return(

    <div className="main">

<div >

<i class="fa fa-shopping-bag logo-cart"></i>

</div>
    <nav class="navbar navbar-expand-lg ">
<div class="container-fluid mt-4 ">
<div>

<button class="navbar-toggler me-auto tog-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<i class="fa fa-bars" style={{'color':'#fff', 'font-size':'28px'}}></i>
</button>
</div>
<a class="navbar-brand me-auto logo" href="#">Website Logo</a>
<div class="collapse navbar-collapse" id="navbarNav">

<ul class="navbar-nav ms-auto">
<li class="nav-item">
  <a class="nav-link active"  href="#"> <i className="fa fa-instagram ic-logo" aria-hidden="true"></i></a>
</li>
<li class="nav-item">
  <a class="nav-link active " href="#"><i class="fa fa-facebook-square ic-logo" aria-hidden="true"></i></a>
</li>

</ul>

</div>
</div>
</nav>

<div className="main-text">Meet our new<br/> limited collection</div> 
<div className="sub-text">Available now</div>
</div>
    )
}





        // my code
     
//     <div className="main">
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