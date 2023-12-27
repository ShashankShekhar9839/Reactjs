import { useState } from "react";
import '../scss/style.scss'
import {ArrowRight, ArrowLeft} from 'lucide-react'

const ImageSliderOne = ({imageUrls}) => { 
    let [activeIndex, setActiveIndex] = useState(0);
    
   let handleRightClick = () => {
    if(activeIndex === imageUrls.length -1) {
        setActiveIndex(0);
    }
    else {
        setActiveIndex(activeIndex + 1);
    }
   } 
    let handleLeftClick = () => {
        if(activeIndex === 0) {
            setActiveIndex(imageUrls.length-1);
        }
        else {
            setActiveIndex(activeIndex - 1);
        }
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