import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import uuid from 'uuid/v4';

export default class CreatePetitionView extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            description: ""
        };
    }
    handleTitleChange = event => {
        this.setState({
            title: event.target.value,
        });
        console.log(this.state);
    };
    handleDescriptionChange = event => {
        this.setState({
            description: event.target.value,
        });
        console.log(this.state);
    };
    handleSubmitButton = () => {
        let petitions = {
            id: uuid(),
            title: this.state.title,
            description: this.state.description,
            signatures: []
        };
        console.log(petitions);

        this.props.newPetition(petitions);
    };
    render() {
        return (
            <div className="container">
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
        );
    }
}
