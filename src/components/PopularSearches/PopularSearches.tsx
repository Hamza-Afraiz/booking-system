import React from 'react';
//src
import PopularSearchBox from '../PopularSearchBox/PopularSearchBox';
import { PopularCities } from '../../constants/PopularCities';

//styles
import './PopularSearches.css'

const PopularSearches = () => {
    return (
        <div className='popular-searches'>
            {PopularCities.map((cityName,index)=>(
            
                <PopularSearchBox key={index} cityName={cityName}/>

            ))}
            
            
        </div>
    );
};

export default PopularSearches;