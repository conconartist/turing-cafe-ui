import React, { Component } from 'react';
import Reservations from '../Reservations/Reservations';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      isFetching: false,
      error: false
    }
  }
  componentDidMount = () => {
    this.setState({isFetching: true})
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(data => {
      this.setState({reservations: data, isFetching: false})
    }).catch(error => {
      this.setState({error: true, isFetching: false})
    })
  }
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
      
        </div>
        <div className='resy-container'>
          {this.state.isFetching && <h2>Gathering reservations...</h2>}
          <Reservations reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
