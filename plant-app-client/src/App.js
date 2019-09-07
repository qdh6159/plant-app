import React from 'react';
import PlantNav from "./components/nav"
import PlantList from "./components/PlantList"

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import './App.css';



function App() {
  return (
    <div className="App">
      {/* <h1>Modal demo</h1> */}
      <PlantNav />
      <PlantList />
    </div>
  );
}

export default App;
