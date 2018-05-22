import React from 'react';
import CarsCard from './CarsCard';

import './CarList.css';

const listOfCarsPerRow = (Cars, row, itemsPerRow, match) =>
  Cars
    .slice((row - 1) * itemsPerRow, row * itemsPerRow)
    .map(car => <CarsCard car={car} key={car.id} match={match} />);

const listOfRows = (Cars, itemsPerRow, match) => {
  const numberOfCars = Cars.length;
  const rows = Math.ceil(numberOfCars / itemsPerRow);

  return Array(rows)
    .fill()
    .map((val, rowIndex) => (
      <div className="columns">
        {listOfCarsPerRow(Cars, rowIndex + 1, itemsPerRow, match)}
      </div>
    ));
};

const CarList = ({ Cars, itemsPerRow = 3, match }) => (
  <div className="cards">
    <h3 className="is-size-3 has-text-centered">Cars</h3>
    {listOfRows(Cars, itemsPerRow, match)}
  </div>
);

export default CarList;