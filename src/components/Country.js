import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Country = ({ getData }) => {

    const [data, setData] = useState();
    const [dataCountry, setDataCountry] = useState();
    const [isLoading, setIsLoading] = useState(true);


    let params = useParams();

    useEffect(() => {
        setTimeout(function () {
            setDataCountry(getData().filter(country => country.name.common === params.name)[0])
            setIsLoading(false);
        }, 0)
        setData(getData())
    }, [getData, params.name]);
    if (isLoading) {
        return <div>...</div>;
    }
    return (

        <div key={dataCountry.name.official} className="country"  >
            <div className='back-button'>
                <Link to={`/`} className="back-button-container">
                    <ion-icon name="arrow-back-outline" size="medium"></ion-icon>
                    <p>Back</p>
                </Link>

            </div>
            <div className='country-container'>
                <div className='image-container'>
                    <div className='country-image' style={{ backgroundImage: `url(${dataCountry.flags.png})` }}></div>
                </div>
                <div className='country-info'>
                    <div className='country-title'>
                        <h2>
                            {params.name}
                        </h2>
                    </div>
                    <div className='text-info'>
                        <div className='left'>
                            <p><span>Native Name:</span> {dataCountry.name.official} </p>
                            <p><span>Population:</span> {dataCountry.population} </p>
                            <p><span>Region:</span> {dataCountry.region} </p>
                            <p><span>Sub Region:</span> {dataCountry.subregion} </p>
                            <p><span>Capital:</span> {dataCountry.capital} </p>

                        </div>
                        <div className='right'>
                            <p><span>Top Level Domain:</span> {dataCountry.tld.map((value) => value + " ")} </p>
                            <p><span>Currencies: </span>{Object.values(dataCountry.currencies).map((value) => value.name + " ")} </p>
                            <p><span>Languages:</span> {Object.values(dataCountry.languages).map((value) => value + " ")} </p>
                        </div>

                    </div>
                    <div className='country-borders'>
                        <div className='left2'>
                            <p><span>Border Countries: </span></p>
                        </div>
                        <div className='right2'>
                            {dataCountry.borders ?
                                dataCountry.borders.map((value, key) => {
                                    let name = data.filter(country => country.cca3 === value)[0];
                                    return <Link to={`/Country/${name.name.common}`} key={key} className="boutton-country"  >
                                        <p>{name.name.common}</p>
                                    </Link>

                                }) :
                                <p>no one</p>
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default Country;