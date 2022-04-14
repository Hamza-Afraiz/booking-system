import React from 'react';
//src
import { ItenaryDaySchedule } from '../../components';
import { TourData } from '../../types/TourData';
//style
import './ItenarySchedule.css'
const ItenarySchedule = ({itenarySchedule}:TourData) => {
    return (
        <div className='itenary-schedule'>
            {itenarySchedule?.map((day,index)=>(
                <div key={index} className='itenary-day-wise'>
                     <ItenaryDaySchedule  id={day.id} temperature={day.temperature} facilities={day.facilities} weatherType={day.weatherType} />
                </div>
            ))}
           
            
        </div>
    );
};

export default ItenarySchedule;