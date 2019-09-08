import React from "react";
import { Nav, NavItem, NavLink } from "shards-react";
import { FormInput } from "shards-react";
import { Button, Modal, ModalBody, ModalHeader } from "shards-react";
import BasicModalExample from "./Component"


export default function PlantNav(props) {
    return (
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
        <BasicModalExample createPlant = {props.createPlant}/>
        </NavItem>
        <NavItem>
        <Button theme="success">My Plants</Button>
        </NavItem>
        
        
      </Nav>
      </div>
    );
  }