import React, { Component } from 'react';
import { Card, CardHeader, CardFooter, CardBody, CardText, Table } from 'reactstrap';




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
                                    {
                                        petition.signatures.map((signature, index) =>
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
                    </Card>

                )}
                <hr />
            </div>
        )
    }
}

export default PetitionView;