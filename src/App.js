import React from "react"
import Header from "./Home/Header"
import Card from "./Home/Card"
import Main from "./Home/Main"

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
        </div>
    )
}