import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({ name, region, capital, flag, population }) => {

    return (
        <div className='card'>
            <Link to={`/Country/${name}`}>
                <div className='card-flag' style={{ backgroundImage: `url(${flag})` }}></div>
                <div className='card-text'>
                    <h3>{name}</h3>
                    <p><span>Population:</span> {population}</p>
                    <p><span>Region:</span> {region}</p>
                    <p><span>Capital:</span> {capital}</p>
                </div>
            </Link>
        </div>
    );
};

export default Country;