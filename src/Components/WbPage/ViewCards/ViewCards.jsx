import React from "react";
import Card from "../Card/Card";
function ViewCards(){

    return(
        <React.Fragment>
            <Card Name="Дидло" Price="50" Points="100" Url="baseUrl"></Card>
            <Card></Card>
        </React.Fragment>
    )
}
export default ViewCards