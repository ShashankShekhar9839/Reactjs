import React, { useState } from "react";
import FileExplorer from "./components/FileExplorer";
import explorer from "./data/files";

const App = () => {
  const [folders, setFolders] = useState(explorer);

  const addFolder = () => {};

  const addFile = () => {};

  return (
    <div>
      <FileExplorer
        explorer={folders}
        onAddFolder={addFolder}
        onAddFile={addFile}
        setFolders={setFolders}
      />
    </div>
  );
};

export default App;
