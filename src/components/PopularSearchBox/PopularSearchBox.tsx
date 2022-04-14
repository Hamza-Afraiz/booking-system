import React from 'react';

//styles
import './PopularSearchBox.css'
interface PopularSearchBoxProps{
  cityName:string
}

const PopularSearchBox = ({cityName}:PopularSearchBoxProps) => {
    return (
        <div className='popular-search-box'>
      {cityName}
            
        </div>
    );
};

export default PopularSearchBox;