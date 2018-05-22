import React from 'react';
import {Link} from 'react-router-dom';
import './CarsCard.css';

const CarsCard = ({ car, match }) => <Link to={`${match.url}/${car.id}`} className="column card">
  <img src={car.Pictures} alt="" width="200" height="200"/>
  <p className="cars-card__name">{car.Model}</p>
  <p className="cars-card__username">{car.Make}</p>
  <div className="cars-card__divider"></div>
  <div className="cars-card__stats"> 
    <div>
      <p>{car.Make}</p>
      <span></span>
    </div>
        <div>
      <p>{car.Variant}</p>
    </div>
    <div>
      <p>{car.RetailPrice}</p>
    </div>
  </div>
</Link>;

export default CarsCard;