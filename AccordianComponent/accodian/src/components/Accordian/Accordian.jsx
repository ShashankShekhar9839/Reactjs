import { useEffect, useState } from 'react';
import '../../scss/accordian.scss';
import PropTypes from 'prop-types'; 

Accordian.PropTypes  = { 
    // type of data
    data : PropTypes.array.isRequired, 
    // scrollable 
    shouldScroll : PropTypes.bool, 
    // default open 
    defaultOpen : PropTypes.number,
}

function Accordian (props) { 


     let {data, ...otherProps} = props;
     let {defaultOpen} = otherProps; 
       
     const [openIndex, setOpenIndex] = useState(defaultOpen);
     console.log('open index', openIndex)  
     
     useEffect(()=>{
        if(defaultOpen) { 
            document.querySelector('.head-wrapper').classList.add = 'default-open-class'
         }
     }, [defaultOpen])



    let handleClick = (index) => { 
     setOpenIndex((prevIndex) => (prevIndex === index ? null : index)); 
     console.log('active' , openIndex)
    }

    let renderHead = (data) => {
        return data?.map((item, index ) => (
            <div className='head-wrapper' key={index} onClick={() => handleClick(index)}> 
            {item.title ? <p className='title'> {item.title}</p> : ''}
            {item.subtitle ? <p>{item.subtitle}</p> : ''}
                
            </div>
        ))
    }
    
    return (
        <div className="accordian-wrapper" {...otherProps}>
            {renderHead(data)}
        </div>
    )
} 

export default Accordian;