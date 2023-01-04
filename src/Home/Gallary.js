import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.min.js";
import 'bs5-lightbox';

export default function Gallary(){
  

    return(
        <div>

        <div class="row">
	<a href="https://unsplash.it/1200/768.jpg?image=251" data-toggle="lightbox" data-gallery="example-gallery" class="col-sm-4">
		<img src="https://unsplash.it/600.jpg?image=251" class="img-fluid"/>
	</a>
	<a href="https://unsplash.it/1200/768.jpg?image=252" data-toggle="lightbox" data-gallery="example-gallery" class="col-sm-4">
		<img src="https://unsplash.it/600.jpg?image=252" class="img-fluid"/>
	</a>
	<a href="https://unsplash.it/1200/768.jpg?image=253" data-toggle="lightbox" data-gallery="example-gallery" class="col-sm-4">
		<img src="https://unsplash.it/600.jpg?image=253" class="img-fluid"/>
	</a>
</div>
<div class="row">
	<a href="https://unsplash.it/1200/768.jpg?image=254" data-toggle="lightbox" data-gallery="example-gallery" class="col-sm-4">
        <img src="https://unsplash.it/600.jpg?image=254" class="img-fluid"/>
	</a>
	<a href="https://unsplash.it/1200/768.jpg?image=255" data-toggle="lightbox" data-gallery="example-gallery" class="col-sm-4">
		<img src="https://unsplash.it/600.jpg?image=255" class="img-fluid"/>
	</a>
	<a href="https://unsplash.it/1200/768.jpg?image=256" data-toggle="lightbox" data-gallery="example-gallery" class="col-sm-4">
		<img src="https://unsplash.it/600.jpg?image=256" class="img-fluid"/>
	</a>
</div>
            </div>
    )
}