import React, { Component } from 'react';
import {
  Button, Form, FormGroup, Label, Input, Card, CardHeader, CardFooter, CardBody, CardText, Table
} from 'reactstrap';
import './App.css';
import petitions from './petitionsData';
import uuid from 'uuid/v4'

function CreateSignature(params) {
  return (
    <div>
      <h3>
        Sign this Petition
  </h3>
      <Form>
        <FormGroup>
          <Label for="firstname">First Name</Label>
          <Input type="text" id="firstname" placeholder="Your first name" />
        </FormGroup>
        <FormGroup>
          <Label for="lastname">Last Name</Label>
          <Input type="text" id="lastname" placeholder="Your last name" />
          <Button color="primary">Create</Button>
        </FormGroup>
      </Form>
    </div>
  )
}


class PetitionView extends Component {
  render() {
    return (
      <div className="body">
        <h1>
          Petitions
    </h1>
        {this.props.petitions.map((petition, index) =>
          
            <Card key={index} className="body">
              <CardHeader>{petition.title}</CardHeader>
              <CardBody>
                <CardText>{petition.description}</CardText>

              </CardBody>
              <CardFooter>
                <h6>Signed by:</h6>
                <Table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    {petition.signatures.map((signature, index)=>
                      <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>{signature.firstName}</td>
                        <td>{signature.lastName}</td>
                        <td>{signature.email}</td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </CardFooter>
            </Card>
          
        )}

      </div>
    )
  }
}

class CreatePetitionView extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: ""
    }
  }

  handleTitleChange = event => {
    this.setState({
      title: event.target.value,
    })
    console.log(this.state);

  }


  handleDescriptionChange = event => {
    this.setState({
      description: event.target.value,
    })
    console.log(this.state);

  }

  handleSubmitButton = () => {
    let petitions = {
      id: uuid(),
      title: this.state.title,
      description: this.state.description,
    }
    this.props.newPetition(petitions)
  }


  render() {
    return (
      <div className="body">
        <h1>
          Create a Petition
      </h1>
        <Form>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input type="text" id="title" placeholder="Write your title" value={this.state.title} onChange={this.handleTitleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input type="textarea" name="text" id="description" onChange={this.handleDescriptionChange} placeholder="Write a description for your petition" value={this.state.description} />

          </FormGroup>
          <Button color="secondary" onClick={this.handleSubmitButton}>Create</Button>
        </Form>
        <hr />
      </div>
    )
  }
}

function Home() {
  return (
    <div>
      <h1>Solitude – Online Petition Platform </h1>
      <Button color="primary">Create Petition</Button>
      <hr />
    </div>
  )
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      petitions: petitions,
    }
    console.log(petitions);

  }
  newPetition = petition => {
    let petitions = this.state.petitions;
    petitions.push(petition);
    this.setState({
      petitions: petitions,
    })
    console.log(this.state);

  }
  render() {
    return (
      <div className="App body">
        <Home />
        <CreatePetitionView newPetition={this.newPetition} />
        <PetitionView petitions={this.state.petitions} />
        <CreateSignature />
      </div>
    )
  }
}

export default App;
