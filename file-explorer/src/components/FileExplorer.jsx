import React, { useState, useCallback, useMemo } from "react";
import "../../src/App.css";
import Input from "./Input";

const addItemToExplorer = (explorer, folderId, newItem) => {
  if (explorer.id === folderId) {
    return {
      ...explorer,
      items: [...explorer.items, newItem], // Ensuring a new array reference
    };
  }

  return {
    ...explorer,
    items: explorer.items.map((item) =>
      item.isFolder ? addItemToExplorer(item, folderId, newItem) : item
    ),
  };
};

const FileExplorer = ({ explorer, onAddFolder, onAddFile, setFolders }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAddingFolder, setIsAddingFolder] = useState(false);
  const [newFolder, setNewFolder] = useState({
    name: "",
    isFolder: false,
    id: "",
    items: [],
  });

  const toggleFolder = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleAddFolder = useCallback((folderId) => {
    setIsAddingFolder(true);
    setNewFolder({ ...newFolder, isFolder: true });
    if (onAddFolder) {
      onAddFolder(folderId);
    }
  }, []);

  const handleAddFile = useCallback((folderId) => {
    setIsAddingFolder(true);
    setNewFolder({ ...newFolder, isFolder: false });
    if (onAddFile) {
      onAddFile(folderId);
    }
  }, []);

  const handleInputChange = (folderName) => {
    setNewFolder((prev) => ({ ...prev, name: folderName }));
  };

  const handleFolderAddition = () => {
    setIsAddingFolder(false);
    setIsOpen(true);
    const newItem = {
      name: newFolder.name,
      isFolder: newFolder.isFolder,
      id: Date.now().toString(),
      items: [],
    };

    setFolders((prevExplorer) =>
      addItemToExplorer(prevExplorer, explorer.id, newItem)
    );
  };

  const childFolders = useMemo(() => {
    return isOpen && explorer.isFolder
      ? explorer.items.map((item) => (
          <FileExplorer
            key={item.id}
            explorer={item}
            onAddFolder={onAddFolder}
            onAddFile={onAddFile}
            setFolders={setFolders}
          />
        ))
      : null;
  }, [isOpen, explorer]);

  return (
    <>
      <div style={{ marginLeft: "20px" }}>
        <div className="folder-container" style={{ cursor: "pointer" }}>
          <span className="folder-name" onClick={toggleFolder}>
            {explorer.isFolder ? (isOpen ? "📂" : "📁") : "📄"} {explorer.name}
          </span>
          {explorer.isFolder && !isAddingFolder && (
            <>
              <button onClick={() => handleAddFolder(explorer.id)}>
                Add Folder
              </button>
              <button onClick={() => handleAddFile(explorer.id)}>
                Add File
              </button>
            </>
          )}
        </div>
        {childFolders}
        {isAddingFolder && (
          <div>
            <Input onChange={handleInputChange} />
            <button onClick={handleFolderAddition}>Add</button>
          </div>
        )}
      </div>
    </>
  );
};

export default FileExplorer;
