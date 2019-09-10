import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Redirect } from 'react-router-dom'


export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            redirect: false,
        }
    }

    handleRedirect = () => {
        this.setState({ redirect: true })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/createPetition' />
        }
    }

    render() {
        return (<div>
            {this.renderRedirect()}
            <h1>Solitude – Online Petition Platform </h1>
            <Button color="primary" onClick={this.handleRedirect}>Create Petition</Button>
            <hr />
        </div>);
    }
}