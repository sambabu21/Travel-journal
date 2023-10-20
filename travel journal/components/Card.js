import React from "react"

export default function Card(props){
    return (
        <div>
            <div className="card-container"> 
                <img src={props.imageUrl} className="card--img"/>
                <div className="info-container">
                    <div className="stat-header">
                        <img src="./images/ping.png" className="ping-img" />
                        <h2 className="card-location">{props.location.toUpperCase()}</h2>
                        <a href={props.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h1 className="card-title">{props.title}</h1> 
                    <p className="card-date">{props.startDate} - {props.endDate}</p>
                    <p className="card-description">{props.description}</p>   
                </div>
                
            </div>   
        </div>    
    )
    
    
}