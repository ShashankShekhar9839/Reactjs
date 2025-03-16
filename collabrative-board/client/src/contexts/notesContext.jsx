import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [storedNotes, setStoredNotes] = useLocalStorage("notes", []);
  const [activeNote, setActiveNote] = useState(null);

  return (
    <NotesContext.Provider
      value={{ storedNotes, setStoredNotes, activeNote, setActiveNote }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  return useContext(NotesContext);
};
