import React from "react";
function getCard(data){
    let cardMap = new Map()
    cardMap.set("Name",data.Name)
    cardMap.set("Price",data.Price)
    cardMap.set("Points",data.Points)
    cardMap.set("Url",data.Url)
    return cardMap
  
}


function Card(props){
    let mp = getCard(props)
    console.log(mp)
    return(
        <React.Fragment>
            
            <div>{mp.get("Name")}</div>
            <div>{mp.get("Price")}</div>
            <div>{mp.get("Points")}</div>
            <div>{mp.get("Url")}</div>
        </React.Fragment>
    )
}
export default Card