import { useState } from "react";

function Notes ({note}) {
   const [isDragging, setIsDragging] = useState(false);
   const [position, setPosition] = useState({x:0, y:0});
   const [offset, setOffset] = useState({x:0, y:0});

   const handleMouseDown = event => {
    setIsDragging(true);
    setOffset({
        x: event.clientX - position.x, 
        y: event.clientY - position.y
    })
   } 

   const handleMouseMove = event => {
    if(isDragging) {
    console.log('dsfds');

        setPosition({
            x: event.clientX - offset.x,
            y: event.clientY - offset.y
        })
    }
   }

   const handleMouseUp = () => {
    setIsDragging(false);
   }

    return (
        <div className="notes-wrapper" 
        style={{
            left: position.x,
            top: position.y,
            cursor: 'move',
            position: 'absolute'
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        >
         {note}
        </div>
    )
} 

export default Notes;