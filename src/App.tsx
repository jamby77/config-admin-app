import React from "react";
import ConfigEditor from "./components/ConfigEditor";
import logo from "./logo.svg";
import "./App.css";

import config from "./config/config";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit config and save.</p>
      </header>
      <div className="content">
        <ConfigEditor
          config={config}
          onChange={(value) => console.log(value)}
          onSave={(value) => console.log(value)}
        />
      </div>
    </div>
  );
}

export default App;
