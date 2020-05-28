import React from "react";
import Skelton from "./components/skelton/index";
import Home from "./components/home/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Skelton>
        <Home />
      </Skelton>
    </div>
  );
}

export default App;
