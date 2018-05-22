import React from 'react';
import CarsCard from './CarsCard';

const CarDetails = ({ car, match }) => <div>
  <h3 className="is-size-3 has-text-centered">Details</h3>
  <CarsCard car={car} match={match} />
</div>;

export default CarDetails;