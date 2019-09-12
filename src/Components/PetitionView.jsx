import React, { Component } from 'react';
import CreateSignature from './CreateSignature'

import { Card, CardHeader, CardBody, CardFooter, CardText, Table } from 'reactstrap';
export default class PetitionView extends Component {

    render() {
        const petition = this.props.location.state.petition;
        return (


            <Card className="body">
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
                < CreateSignature newSignature={this.props.newSignature} petitionId={petition.id}/>



            </Card>

        )
    }
}
