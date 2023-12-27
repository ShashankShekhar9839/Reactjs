import { useState } from "react";
import '../scss/style.scss'
import {ArrowRight, ArrowLeft} from 'lucide-react'

const ImageSliderOne = ({imageUrls}) => { 
    let [activeIndex, setActiveIndex] = useState(0);
    
   let handleRightClick = () => {
       setActiveIndex(index => {
        if(index === imageUrls.length - 1) return 0; 
        return index + 1;
       })
   } 
    let handleLeftClick = () => {
         setActiveIndex(index => {
            if(index === 0) return imageUrls.length - 1;
            return index - 1;
         })
    }

    return (
        <div className="image-slider-wrapper">
            <img src={`${imageUrls[activeIndex]}`}/> 
            <button className="right-btn" onClick={handleRightClick}>
            <ArrowRight size={32} color="white" />
            </button>
            <button className="left-btn" onClick={handleLeftClick}>
            <ArrowLeft size={32} color="white" />
            </button>
        </div>
    )
} 

export default ImageSliderOne;