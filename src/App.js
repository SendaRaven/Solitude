import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import { Navbar, NavbarBrand, NavItem, Nav, NavLink } from 'reactstrap';

import PetitionListView from './Components/PetitionListView'
import CreatePetitionView from './Components/CreatePetitionView';
import Home from './Components/Home';
import PetitionView from './Components/PetitionView'

import "./storage"


class App extends Component {
  constructor() {
    super();
    let petitions = JSON.parse(localStorage.getItem('petitions')) || [];
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

  newSignature = (petitionId, signature) => {
    let petitions = this.state.petitions;
    let petitionIndex = petitions.findIndex(petition => petition.id === petitionId);
    console.log("Index", petitionIndex);
    let signatures = petitions[petitionIndex].signatures || [];

    signatures.push(signature);
    petitions[petitionIndex].signatures = signatures;
    this.setState({
      petitions: petitions
    });
    console.log(this.state);
  }

  componentDidUpdate() {
    localStorage.setItem('petitions', JSON.stringify(this.state.petitions))
  }

  render() {
    return (
      <Router>
        <Navbar color="light" light expand="md">
          <NavbarBrand>Solitude</NavbarBrand>
          <Nav className="ml-auto" navbar>
          <NavItem>
          <NavLink><Link to="/"> Home </Link></NavLink>
          </NavItem>
          <NavItem>
          <NavLink><Link to="/createPetition"> Create a Petition</Link></NavLink>
          </NavItem>
          <NavItem>
          <NavLink><Link to="/viewPetitions"> View all Petitions </Link></NavLink>
          </NavItem>
          {/* <CreatePetitionView newPetition={this.newPetition} /> */}
          {/* <PetitionView petitions={this.state.petitions} /> */}
          {/* <CreateSignature newSignature={this.newSignature} /> */}
          </Nav>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/createPetition" render={(props) => <CreatePetitionView {...props} newPetition={this.newPetition} />} />
          <Route path="/viewPetitions" render={(props) => <PetitionListView {...props} petitions={this.state.petitions} />} />

          <Route path="/:id" render={(props) => <PetitionView {...props} newSignature={this.newSignature} />} />

        </Switch>
      </Router>
    )
  }
}

export default App;
