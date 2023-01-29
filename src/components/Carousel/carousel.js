import "./carousel.css";
import { useState } from "react";
import data from "../Card/Card_data";
export default function Carousel(){
    const [imgIndex,setImgIndex]=useState(0)
    // setTimeout(() => {
    //     if(imgIndex==data.length-1){
    //         setImgIndex(0)
    //     }
    //     else{
    //         setImgIndex(imgIndex+1)
    //     }
       
    // },1500);
    return  <>
    <div className="carousel-container">
        <div className="carousel">
            <div className="left" onClick={()=>{setImgIndex(imgIndex===0?imgIndex+ data.length-1:imgIndex-1)}}><i class="fa fa-solid fa-chevron-left"></i></div>
            <img src={data[imgIndex].img} className="carousel-img"/>
            <div className="right" onClick={()=>{setImgIndex(imgIndex===data.length-1?imgIndex-data.length+1:imgIndex+1)}}><i class="fa fa-solid fa-chevron-right"></i></div>
        </div>
    </div> 
    </>
}