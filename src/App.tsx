import React from "react";
import ConfigEditor from "./components/ConfigEditor";

import config from "./config/config";
import schema from "./schema/config.json";

function App() {
  return (
    <div className="App">
      <div className="content">
        <ConfigEditor
          config={config}
          onChange={(value) => console.log(value)}
          onSave={(value) => console.log(value)}
          schema={schema}
        />
      </div>
    </div>
  );
}

export default App;
