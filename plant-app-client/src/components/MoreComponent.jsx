import React from 'react'
import { Button, Modal, ModalBody, ModalHeader } from "shards-react";
import { Form, FormInput, FormGroup, FormTextarea } from "shards-react";
import { Container, Row, Col } from "shards-react";


import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"


export default class MoreModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      open: false
     };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  handleChange = (e) => {
    this.setState ({
        [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createPlant(this.state)
}

  render() {
    const { open } = this.state;
    return (
        <div>
            <Button onClick={this.toggle}>Click Me!</Button>
            <Modal open={open} toggle={this.toggle}>
                <ModalHeader>PlantNerd</ModalHeader>
                <ModalBody>👋 {this.props.name}}{this.props.scientificName}} {this.props.sun}} {this.props.water}} {this.props.description}}
                 {this.props.imageOne}} {this.props.imageTwo}}! 
                
                </ModalBody>
            </Modal>
        </div>
    );
  }
}