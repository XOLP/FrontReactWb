import React from "react";
import Card from "../Card/Card";
import js from "/src/assets/t.json"
import { createRoutesFromElements } from "react-router-dom";

function ViewCards(){

    return(
        
        <React.Fragment>
            {js.map(el=> (el.Ret.map(els=>(
                    <Card Name={els.Name} Price={els.Price} Points={els.Points} Url={els.Url} UrlImg={els.UrlImg}></Card>
                
            ))
            
               
            ))}
        </React.Fragment>
    )
}
export default ViewCards