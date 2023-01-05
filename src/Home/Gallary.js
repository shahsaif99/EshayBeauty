import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.min.js";
import "bs5-lightbox";

export default function Gallary(){
  

    return(
        <div className="container-fluid">
		
        <div className="row">
	<a href="https://unsplash.it/1200/768.jpg?image=251" data-toggle="lightbox" data-gallery="example-gallery" className="col-sm-4 gall">
		<img src="https://unsplash.it/600.jpg?image=251" className="img-fluid"/>
	</a>
	<a href="https://unsplash.it/1200/768.jpg?image=252" data-toggle="lightbox" data-gallery="example-gallery" className="col-sm-4 gall">
		<img src="https://unsplash.it/600.jpg?image=252" className="img-fluid"/>
	</a>
	<a href="https://unsplash.it/1200/768.jpg?image=253" data-toggle="lightbox" data-gallery="example-gallery" className="col-sm-4 gall">
		<img src="https://unsplash.it/600.jpg?image=253" className="img-fluid"/>
	</a>
</div>
<div className="row">
	<a href="https://unsplash.it/1200/768.jpg?image=254" data-toggle="lightbox" data-gallery="example-gallery" className="col-sm-4 gall">
        <img src="https://unsplash.it/600.jpg?image=254" className="img-fluid"/>
	</a>
	<a href="https://unsplash.it/1200/768.jpg?image=255" data-toggle="lightbox" data-gallery="example-gallery" className="col-sm-4 gall">
		<img src="https://unsplash.it/600.jpg?image=255" className="img-fluid"/>
	</a>
	<a href="https://unsplash.it/1200/768.jpg?image=256" data-toggle="lightbox" data-gallery="example-gallery" className="col-sm-4 gall">
		<img src="https://unsplash.it/600.jpg?image=256" className="img-fluid"/>
	</a>
</div>
            </div>
    )
}