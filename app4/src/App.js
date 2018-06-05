import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }

    this.getCars = this.getCars.bind(this);

  }

  getCars() {
    axios.get('https://joes-autos.herokuapp.com/api/vehicles')
    .then(res => {
      this.setState({
        cars: res.data
      })
    })
  }

  render() {
    let {cars} = this.state;
    let totalCars = cars.map(car => {
      return (
        <div key={car.id}>
          <p>{car.id}</p>
          <p>{car.make}</p>
          <p>{car.model}</p>
          <p>{car.year}</p>
          <p>{car.color}</p>
          <p>{car.price}</p>
        </div>
      )
    })

    return (
      <div className="App">
        <button onClick={this.getCars}>Get cars</button>
        {totalCars}
      </div>
    );
  }
}

export default App;
