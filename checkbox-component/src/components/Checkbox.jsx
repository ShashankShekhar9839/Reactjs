import { useEffect, useState } from 'react';
import '../scss/checkbox.scss'

function CheckBox(props) {
    const {label, checked, onChange } = props;
    const  [isChecked, setIsChecked] = useState(checked); 
     
    let renderText = (isChecked) => {
        return (isChecked ? <h2>CheckBox is active</h2> : <h2>Checkbox is not active</h2>)
    }

     return(
        <div className='checkbox-wrapper'> 
        <label>
        <input type='checkbox'
        checked = {isChecked}
        onChange={()=>{
            setIsChecked(!isChecked); 
            onChange(!isChecked)
        }}
        />
        {label}
        </label> 
        <div>{renderText(isChecked)}</div>
        </div>
    )
} 

export default CheckBox;