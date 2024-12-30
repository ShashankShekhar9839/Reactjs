import React from "react";
import Tabs from "./components/Tabs";
import TabsPane from "./components/TabsPane";

const App = () => {
  return (
    <div>
      <Tabs defaultActive={3}>
        <TabsPane label="Tab-1">
          <div
            style={{
              border: "1px solid gray",
            }}
          >
            Content of first tab
          </div>
        </TabsPane>
        <TabsPane label="Tab-2">Pane - 2</TabsPane>
        <TabsPane label="Tab-3">Pane - 3</TabsPane>
        <TabsPane label="Tab-4">Pane - 4</TabsPane>
        <TabsPane label="Tab-5">Pane - 5</TabsPane>
        <TabsPane label="tab-6">Pane - 6</TabsPane>
        <TabsPane label="Tab-7">Pane - 7</TabsPane>
      </Tabs>
    </div>
  );
};

export default App;
