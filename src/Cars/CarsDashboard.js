import React from 'react';
import { Route } from 'react-router-dom';
import CarList from './CarList';
import CarDetails from './CarDetails';

const CarsDashboard = ({ Cars, car, match }) => (
  <div className="columns">
    <div className="column">
      <CarList Cars={Cars} match={match} />
    </div>
    <div className="column">
      <Route
        path={match.url + '/:id'}
        render={props => (
          <CarDetails
            car={
              Cars.filter(
                car => car.id === parseInt(props.match.params.id, 10)
              )[0]
            }
            match={match}
          />
        )}
      />
    </div>
  </div>
);

export default CarsDashboard;
