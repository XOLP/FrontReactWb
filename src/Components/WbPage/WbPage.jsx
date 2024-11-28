import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import InputBlock from "./Inputblock/InputBlock";
import ViewCards from "./ViewCards/ViewCards";
import DescriptionBlock from "./DescriptionBlock/DescriptionBlock";
import "./WbPage.css"



function WbPage(){
    return(
        <React.Fragment>
            <Header/>
            <div className="mp">
            
           
        
            <DescriptionBlock/>
            
            <InputBlock/>
            
            <ViewCards/>

            <Footer/>
            
            </div>
            
        </React.Fragment>
    )
}
export default WbPage