import React from "react"

export default function Place(props) {
    return (
        <div className="place">
            <img 
                src={`../images/${props.imageUrl}`} 
                className="place--image" 
                alt=""/>
            <div className="place--container">
                <div className="place--info">
                    <img src="../images/Fill220.png" className="place--point" alt=""/>
                    <span className="place--location">{props.location}</span>
                    <a href={props.googleMapsUrl}><p className="place--maps">View on Google Maps</p></a>
                </div>
                <h1 className="place--title">{props.title}</h1>
                <p className="place--date">{props.startDate} - {props.endDate}</p>
                <p className="place--description">{props.description}</p>
            </div>
        </div>
    )
}