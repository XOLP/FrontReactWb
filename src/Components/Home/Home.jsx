import React from "react";


import Header from "../WbPage/Header/Header";
import DescriptionBlock from "../WbPage/DescriptionBlock/DescriptionBlock";
import Footer from "../WbPage/Footer/Footer";



function Home(){
    return(
        <React.Fragment>
              <Header/>
            <div className="mp">
            
          
        
            <DescriptionBlock/>

            <Footer/>
            
            </div>
            
        </React.Fragment>
    )
}
export default Home
