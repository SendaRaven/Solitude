import React, { Component } from 'react';
import CreateSignature from './CreateSignature'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Card, CardHeader, CardBody, CardFooter, CardText, Table } from 'reactstrap';
export default class PetitionView extends Component {
    state = {
        modal: false
    };
    toggle = () => this.setState({ modal: !this.state.modal });
    
    render() {
        const petition = this.props.location.state.petition;

        return (

            <Card className="body">
                <CardHeader>{petition.title}</CardHeader>
                <CardBody>
                    <CardText>{petition.description}</CardText>
                    <Button color="danger" onClick={this.toggle}>Sign Petition</Button>
                </CardBody>
                <CardFooter>
                    <h6>Signed by:</h6>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>eMail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {petition.signatures.map((signature, index) =>
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{signature.firstName}</td>
                                    <td>{signature.lastName}</td>
                                    <td>{signature.email}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </CardFooter>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{petition.title}</ModalHeader>
                    <ModalBody>
                        < CreateSignature newSignature={this.props.newSignature} toggle={this.toggle} petitionId={petition.id} />
                    </ModalBody>
                </Modal>
            </Card>
        )
    }
}
