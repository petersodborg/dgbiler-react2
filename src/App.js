import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Media from 'react-media';
import axios from "axios";
import Nav from './Nav';
import JwPagination from 'jw-react-pagination';
import CarList from './Cars/CarList';
import CarDetails from './Cars/CarDetails';
import CarsDashboard from './Cars/CarsDashboard';
import './App.css';
//const { API_KEY } = process.env
//const API_URL = 'http://dgbiler.dev5.mediastyle.dk/socket.io'

class App extends Component{
  constructor(){
    super();

    //bind onchange
    this.onchangePage = this.onchangePage.bind(this);

  //default state object
  this.state = {
    Cars: [],
    pageOfItems: []
  };
}

onchangePage(pageOfItems){
  this.setState({ pageOfItems });
}
  //get api fra dgbiler
    componentDidMount(){
    axios
    .get("http://dgbiler.dev5.mediastyle.dk/socket.io")
      .then(response => {

        // create an array of contacts only with relevant data
        const newCars = response.data.map(car => {
          return {
            id: car.Id,
            Model: car.Model,
            Pictures: car.Pictures,
            PictureCount: car.PictureCount,
            Variant: car.Variant,
            MileAge: car.MileAge,
            RetailPrice: car.RetailPrice
          };
        });

        // create a new "State" object without mutating 
        // the original State object. 
        const newState = Object.assign({}, this.state, {
          Cars: newCars
        });

        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }




	render() {
    return (
      <div className="App">
              <Nav />
        <Media query="(max-width: 599px)">
          {matches =>
            matches ? (
              <Switch>
                <Route
                  exact
                  path="/cars"
                  render={props => (


                    <CarList Cars={this.state.Cars} {...props} />
                  )}
                />
            <Route
                  path="/cars/:id"
                  render={props => (
                    <CarDetails
                      car={
                        this.state.Cars.filter(
                          car =>
                            car.id === parseInt(props.match.params.id, 10)
                        )[0]
                      }
                      {...props}
                    />
                  )}
                />
                <Redirect from="/" to="/cars"/>
                <Redirect from="/dashboard" to="/cars"/>
              </Switch>
            ) : (
              <Switch>
                <Route
                  path="/dashboard"
                  render={props => (
                    <CarsDashboard Cars={this.state.Cars} {...props} />
                  )}
                />
                <Redirect from="/" to="/dashboard"/>
                <Redirect from="/cars" to="/dashboard"/>
              </Switch>
            )
          }
        </Media>
      </div>
    );




  }
}

export default App;