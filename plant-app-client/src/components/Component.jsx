import React from 'react';
import { Button, Modal, ModalBody, ModalHeader } from "shards-react";
import { Form, FormInput, FormGroup, FormTextarea } from "shards-react";
import { Container, Row, Col } from "shards-react";


import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"


export default class BasicModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <Button onClick={this.toggle}>New Plant</Button>
        <Modal  open={open} toggle={this.toggle}>
            <ModalHeader>+ New Plant 🌿</ModalHeader>
            <ModalBody>👋 Hello there! Just fill out the information bellow to add a new plant to your collection!</ModalBody>
          
            <Container>
                
                    <Col >
                    <Form>

                        <Row>
                        <FormGroup>
                            <label htmlFor="#username">Name</label>
                            <FormInput id="#username" placeholder="Name" />
                        </FormGroup>
                
                        <FormGroup>
                            <label htmlFor="#password">Scientific Name</label>
                        <FormInput type="password" id="#password" placeholder="Scientific Name" />
                        
                        </FormGroup>
                        </Row>
                        <Row>
                        <FormGroup>
                            <label htmlFor="#username">Water</label>
                            <FormInput id="#username" placeholder="Water" />
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="#password">Sun</label>
                            <FormInput type="password" id="#password" placeholder="Sun" />
                        </FormGroup>
                        </Row>
                        <Row>      
                        <p className="mb-2">
                        🤔 A little something about this plant...
                        </p>
                        <FormTextarea placeholder="Description"/> 
                        </Row>

                        <Row>
                        <FormGroup>
                            <label htmlFor="#username">Image 1</label>
                            <FormInput id="#username" placeholder="Image 1" />
                        </FormGroup>
                        </Row>

                        <Row>
                        <FormGroup>
                            <label htmlFor="#password">Image 2</label>
                            <FormInput type="password" id="#password" placeholder="Image 2" />
                        </FormGroup>
                        </Row>
                        <br></br>
                        <Button block>Save to Collection</Button>
                        <Button block theme="secondary">Cancel </Button> 
                        <br></br>          
                    </Form>
                    </Col>
            </Container>
            </Modal>
      </div>
    );
  }
}