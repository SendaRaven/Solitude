import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class CreateSignature extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
        }
    }

    handleFirstNameChange = event => {
        this.setState({
            firstName: event.target.value
        })
        console.log(this.state.firstName);
    }

    handleLastNameChange = event => {
        this.setState({
            lastName: event.target.value
        })
        console.log(this.state.lastName);
    }

    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        })
        console.log(this.state.email);
    }

    handleSignatureButton = () => {
        let signature = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
        }
        console.log(signature);
        this.props.newSignature(this.props.petitionId,signature)

        this.setState({
            firstName: "",
            lastName: "",
            email: "",
        })
    }

    render() {
        return (
            <div>
                <h3>
                    Sign this Petition
    </h3>
                <Form>
                    <FormGroup>
                        <Label for="firstname">First Name</Label>
                        <Input type="text" id="firstname" placeholder="Your first name" value={this.state.firstName} onChange={this.handleFirstNameChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastname">Last Name</Label>
                        <Input type="text" id="lastname" placeholder="Your last name" value={this.state.lastName} onChange={this.handleLastNameChange} />

                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" id="email" placeholder="Your email" value={this.state.email} onChange={this.handleEmailChange} />
                    </FormGroup>
                    <Button color="primary" onClick={this.handleSignatureButton}>Sign</Button>
                </Form>
            </div>
        )
    }
}

export default CreateSignature;