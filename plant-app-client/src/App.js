import React from 'react';
import './App.css';
import BasicModalExample from './components/Component'
import { Button, Modal, ModalBody, ModalHeader } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import BasicCardExample from './components/Card'
import { Nav, NavItem, NavLink } from "shards-react";
import { FormInput } from "shards-react";

function App() {
  return (
    <div className="App">
      {/* <h1>Modal demo</h1> */}
      <div>
      <Nav>
      <NavItem>
        <NavLink active href="#">
          Plant<span role="img">🌿</span>Nerd<span role="img">🤓</span>
        </NavLink>
      </NavItem>
      
      <NavItem id="form-control">
        <FormInput placeholder="Search Plants" id="search"/>
      </NavItem>
      
      <NavItem>
      <BasicModalExample />
      </NavItem>
      <NavItem>
      <Button theme="success">My Plants</Button>
      </NavItem>
      
      
    </Nav>
        
        <div class="cardExample">
          <BasicCardExample /><BasicCardExample /><BasicCardExample /><BasicCardExample /><BasicCardExample /> <BasicModalExample />
        </div>
      </div>
    </div>
  );
}

export default App;
