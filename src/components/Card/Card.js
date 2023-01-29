import React from "react";
import data from "./Card_data";
import './card.css';
export default function Card() {
   return (
      <div className="card-container">
         <h1 className="heading">ABCD OF A WEB DEVELOPER</h1>
      <div className="card">
         {data.map((item, index) => {
            return <div  key={index}>
               <img src={item.img} className="card-img" />
               <h1 className="card-heading">{item.name}</h1>
               <p className="card-desc">Desc...</p>
            </div>
         })}
         </div>
      </div>
   )
};