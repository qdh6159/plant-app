import React from 'react';
import PlantNav from "./components/nav"
import PlantList from "./components/PlantList/PlantList"
import MainContainer from "./components/MainContainer"

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import './App.css';



function App() {
  return (
    <div className="App">
      {/* <h1>Modal demo</h1> */}
      <PlantNav />
      <MainContainer />
    </div>
  );
}

export default App;
