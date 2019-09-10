import React, { Component } from 'react';
import petitions from './petitionsData';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

import './App.css';

//import CreateSignature from './Components/CreateSignature'
import PetitionView from './Components/PetitionView'
import CreatePetitionView from './Components/CreatePetitionView';
import Home from './Components/Home';


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

  newSignature = signature => {
    let signatures = this.state.petitions[0].signatures;
    signatures.push(signature);
    this.setState({
      petitions: petitions
    })
    console.log(this.state);
  }

  render() {
    return (
      <Router>
        <div className="App body">
          <Link to="/"> Home </Link>
          <Link to="/createPetition"> Create a Petition</Link>
          <Link to="/viewPetitions"> View all Petitions </Link>
          {/* <CreatePetitionView newPetition={this.newPetition} /> */}
          {/* <PetitionView petitions={this.state.petitions} /> */}
          {/* <CreateSignature newSignature={this.newSignature} /> */}
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/createPetition" render={(props) => <CreatePetitionView {...props} newPetition={this.newPetition} />} />
          <Route path="/viewPetitions" render={(props) => <PetitionView {...props} petitions={petitions} />} />

        </Switch>
      </Router>
    )
  }
}

export default App;
