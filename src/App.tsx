import { useState } from "react";
import ConfigEditor from "./components/ConfigEditor";
import { Config } from "./components/helper";

import config from "./config/config";

function App() {
  const [updateConfig, setConfig] = useState<Config>(config);
  return (
    <div className="App">
      <div className="content">
        <ConfigEditor
          config={updateConfig}
          onChange={(value: Config) => {
            console.log(value);
            setConfig(value);
          }}
          onSave={() => console.log(updateConfig)}
        />
      </div>
    </div>
  );
}

export default App;
