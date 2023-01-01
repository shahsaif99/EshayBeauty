import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.min.js";

export default function Card(props) {
  
  const [allcard, setAllCard]=React.useState([])

  React.useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => setAllCard(data.title))
  })

  console.log(allcard);

  return (
    <div>
      

          

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
        
              
      
  );
}

//mycode
//     <div>

//     <div class="container-fluid">

//     <div class="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2" id="collection">

// 			<div class="col-5">
// 				<div class="card card-block card-1"></div>
// 			</div>
// 			<div class="col-5">
// 				<div class="card card-block card-2"></div>
// 			</div>
// 			<div class="col-5">
// 				<div class="card card-block card-3"></div>
// 			</div>
// 			<div class="col-5">
// 				<div class="card card-block card-4"></div>
// 			</div>
// 			<div class="col-5">
// 				<div class="card card-block card-5"></div>
// 			</div>
// 			<div class="col-5">
// 				<div class="card card-block card-6"></div>
// 			</div>
// 			<div class="col-5">
// 				<div class="card card-block card-7"></div>
// 			</div>
// 			<div class="col-5">
// 				<div class="card card-block card-8"></div>
// 			</div>
// 			<div class="col-5">
// 				<div class="card card-block card-9"></div>
// 			</div>
// 			<div class="col-5">
// 				<div class="card card-block card-10"></div>
// 			</div>
//     </div>
// </div>
                          //  api call    
//   const [card, setCard] = React.useState({
    //     productname: "",
    //     productprice: "",
    //     productimg: "",
    //   });
    
    //   const [allcard, setAllCard] = React.useState([{
    //     userId:	1,
    //   id:	1,
    //  title:	"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    // body:	"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    //   }]);
    
    //   React.useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //       .then((res) => res.json())
    //       .then((data) => setAllCard(data));
    //   }, []);
    //   console.log(allcard[2].id)
      // if (allcard.length > 0) {
      //   console.log(allcard[0].id);
        // React.useEffect(()=>{
    
          
        //   setCard((prevcard) => ({
        //     ...prevcard,
        //     productname: allcard[2].title,
        //   }));
        // },[]
        //   )
      
