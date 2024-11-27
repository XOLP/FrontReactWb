import React from "react";
import Card from "../Card/Card";
function ViewCards(){

    return(
        <React.Fragment>
            <Card Name="название" Price="10" Points="100" Url="baseUrl"></Card>
            <Card></Card>
        </React.Fragment>
    )
}
export default ViewCards