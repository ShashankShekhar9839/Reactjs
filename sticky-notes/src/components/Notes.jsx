import { createRef, useEffect, useRef, useState } from "react";
import Note from "./Note";

function Notes({ notes = [], setNotes = () => {} }) {
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
       const savedNotes = [];

       const updateNotes = notes.map((note) => {
        const savedNote = null;
        if(savedNote) {
          return;
        }
        else {
          const position = determineNewPosition();
          return {...note, position}
        }
       })

       setNotes(updateNotes);
}, [notes.length])

  const noteRefs = useRef([]);

  const determineNewPosition = () => {
    const maxX = window.innerWidth - 300;
    const maxY = window.innerHeight - 100;
    
    return {
      x: Math.floor(Math.random() * maxX),
      y: Math.ceil(Math.random() * maxY)
    }
  }

  const handleMouseDown = (e, note) => {
    if(note.id) {
      setIsDragging(true);
    } 
  }

  const handleMouseMove = (e, note) => {
    if(isDragging) {
      const deltaX = e.movementX;
      const deltaY = e.movementY;
      for(let i=0;i<notes.length;i++) {
        if(notes[i].id === note.id) {
          noteRefs.current[note.id].style.position = deltaX;
          note.position.y = deltaY; 
        }
      }
    }
  }

  return <>
      {notes.map((note, index)=> {
        return (
            <Note
            key={note.id}
            content = {note.text}
            ref={
              noteRefs.current[note.id]
                ? noteRefs.current[note.id]
                : (noteRefs.current[note.id] = createRef())
            }
            initialPosition = {note.position}
            onMouseDown= {(e) => handleMouseDown(e, note)}
            onMouseMove= {(e) => handleMouseMove(e, note)}
            />
        )
    })}
  </>;
}

export default Notes;
