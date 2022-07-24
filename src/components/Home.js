import React, { useState } from 'react';
import Filters from './Filters';
import Card from './Card';


const Home = ({data}) => {
    const [text, setText] = useState('');
    const [region, setRegion] = useState('');
    
    const handleChangeText = (event) => {
        setText(event.target.value);
    }
    const handleChangeRegion = (event) => {
        setRegion(event.target.value);
    }
    
    return (
        <div className='home'>
            <Filters handleChangeText={handleChangeText} handleChangeRegion={handleChangeRegion} text={text} region={region} />
            <div className="countries-container">
                {data?.filter(country => country.name.common.toLowerCase().includes(text.toLowerCase()) && (country.region === region || region === ""))
                .map((country, index) => (

                    <Card key={index}
                        name={country.name.common}
                        region={country.region}
                        capital={country.capital}
                        flag={country.flags.png}
                        population={country.population}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;