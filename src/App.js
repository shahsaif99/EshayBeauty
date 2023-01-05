import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./Home/Header"
import Card from "./Home/Card"
import Main from "./Home/Main"
import Gallary from "./Home/Gallary"
import Contact from "./Home/Contact"
import Footer from "./Home/Footer";

export default function App(){
    const [cards, setCards]=React.useState([])
    
    // this function is used to fetch api for card
  async function getcards(){
    const res= await fetch("https://jsonplaceholder.typicode.com/posts ")
    setCards(await res.json());

  }
  React.useEffect(()=>{
    getcards();

 },[])
    return(
        <div >
            
        <Header/>
        <br/>
        <div className="row">

        {
          cards.slice(0,3).map((data)=>{
            return (
              
              
              <Card name={data.title} />
              
              )    
            })
          }
          </div>
          <Main/>
          <Gallary/>
          <Contact/>
          <Footer/>
        </div>
    )
}