import React from "react"
import Header from "./Home/Header"
import Card from "./Home/Card"

export default function App(){
    const [cards, setCards]=React.useState([])
  const [cardData , setCardData]=React.useState({
    productname: "",
    productdis: "",

  })


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
                  <div className="card-list container-fluid">
                    <div className="row">
                        <div className="col-lg-4"> 


                    <Card 
                    name={data.title}
                    />
                    </div>
                    </div>
                    </div>

                )
            })
        }
        </div>
    )
}