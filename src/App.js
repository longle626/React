import React from "react";
import "./App.css";
import Header from "./header.js";
import Sidebar from "./Sidebar.js";
import Feed from "./Feed.js";
import Widget from "./Widget.js";
function App() {
  return (
    <div className="App">
      <Header />
      <div class="app-body">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
}

export default App;
