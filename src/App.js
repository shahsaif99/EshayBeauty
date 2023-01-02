import React from "react"
import Header from "./Home/Header"
import Card from "./Home/Card"

export default function App(){
    const [cards, setCards]=React.useState([])
    
  async function getcards(){
    const res= await fetch("https://jsonplaceholder.typicode.com/posts")
    setCards(await res.json());

  }
  React.useEffect(()=>{
    getcards();

 },[])
    return(
        <div >
            
        <Header/>
        <br/>
        {
            cards.map((data)=>{
                return(
                  
                   


                    <Card 
                    name={data.title}
                    />
                    
                    
                    

                )
            })
        }
        </div>
    )
}