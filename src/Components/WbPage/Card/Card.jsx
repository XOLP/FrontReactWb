import React from "react";
import "./Card.css"
function getCard(data){
    let cardMap = new Map()
    cardMap.set("Name",data.Name)
    cardMap.set("Price",data.Price)
    cardMap.set("Points",data.Points)
    cardMap.set("Url",data.Url)
    cardMap.set("ImgUrl", data.UrlImg)
    return cardMap
  
}

function Card(props){
    let mp = getCard(props)
    console.log(mp)
    return(
        <React.Fragment>
            <div className="cardSearch">
                <div className="cardTitle">Товары по запросу:</div>
                <div className="cardContent">
                    <div className="productImg">
                        <img src={mp.get("ImgUrl")} alt="" className="Imgur" />
                    </div>
                    <div className="contStolb">  
                        <div htmlFor="" className="productTitle">{mp.get("Name")} </div>
                        <div className="labelRow">
                            <div htmlFor="" className="labelP">Цена:</div>
                            <div htmlFor="" className="productCost">{mp.get("Price")}</div>
                        </div>
                        <div className="labelRow">
                            <div htmlFor="" className="labelP">Баллы:</div>
                            <div htmlFor="" className="Balls">{mp.get("Points")}</div>
                        </div>
                        <form action={mp.get("Url")} target="_blank">
                            <input type="submit"className="SearchBtn"  value="Перейти"/>
                        </form>
                          
                    </div>
                   
                </div>
                
            </div>                          




          
            
        </React.Fragment>
    )
}
export default Card 