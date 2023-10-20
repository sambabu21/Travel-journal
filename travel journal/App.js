import React from "react"
import Card from "./components/Card"
import Header from "./components/Header"
import data from "./data"

export default function App(){
    const cardSection = data.map((item) => {
        return (
            <Card 
                key={item.id}
                {...item}
            />
           
        )
    })
    return (
        <div>
            <Header />
            {cardSection}
            
        </div>
   )}