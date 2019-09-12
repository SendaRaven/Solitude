import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from "reactstrap"
import { Link } from 'react-router-dom'
// import PetitionView from './PetitionView';



class PetitionListView extends Component {
    render() {
        return (
            <div className="body">
                <h1>Petitions</h1>
                <ListGroup >
                    {this.props.petitions.map((petition, index) =>

                        <ListGroupItem key={index} petition={petition}><Link to={{ pathname: `/${petition.id}`, state: { petition: petition } }}>{petition.title}</Link></ListGroupItem>

                    )}
                </ListGroup>
                <hr />
            </div >
        )
    }
}

export default PetitionListView;