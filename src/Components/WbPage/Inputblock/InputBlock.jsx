import React from "react";
import "./InputBlock.css"
function InputBlock(){
    return(
        <React.Fragment>
           
            <div className="searchBlock">      
                <div class="search_title">Поиск:</div>
                <form onSubmit={this}>
                <label className="labelName">
                    Назавание:
                    <input className="id1" type="text" name="name" placeholder="Введите запрос..." /> 
                    <br/>
                </label>
                <label className="labelBalli">
                    Баллы:
                    <input className="id2" type="text" name="name" placeholder="Введите запрос..." /> 
                    <br/>
                </label>
                <label className="labelPrice">
                    Цена:
                <label className="start_price">
                    От:
                    <input className="startPriceInput" type="text"name="name" placeholder="Введите запрос..."/>
                </label>
                <label className="end_price">
                    До:
                    <input className="endPriceInput"type="text" name="name" placeholder="Введите запрос..."/>
                </label>
                </label>
                <br/>
                <input className="btn" type="submit" value="Найти" />
                </form>
            </div>
        </React.Fragment>
    )
}
export default InputBlock