import React from 'react';
import logo from './logo.svg';
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
          Active
        </NavLink>
      </NavItem>
      
      <NavItem id="form-control">
        <FormInput placeholder="Search Plants" id="search"/>
      </NavItem>
      
      <NavItem>
      <Button outline pill theme="secondary">
        Secondary
      </Button>
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
