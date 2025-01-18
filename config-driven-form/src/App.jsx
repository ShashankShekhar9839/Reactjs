import React from "react";
import Input from "./components/Input";
import Form from "./components/Form";
import formSchema from "./data/data";

const App = () => {
  return (
    <div>
      <h3>--- Config Driven Form ---</h3>
      <Form formSchema={formSchema} />
    </div>
  );
};

export default App;
