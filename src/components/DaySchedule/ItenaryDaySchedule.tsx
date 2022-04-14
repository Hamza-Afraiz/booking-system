//lib
import React from "react";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import LightModeIcon from "@mui/icons-material/LightMode";
import GrainIcon from "@mui/icons-material/Grain";
//style
import "./ItenaryDaySchedule.css";
//types
import { itenarySchedule } from "../../types/ItenarySchedule";
//src

const ItenaryDaySchedule = ({
  id,
  temperature,
  facilities,
  weatherType,
}: itenarySchedule) => {
  return (
    <div className="itenary-day-container">
      <div className="itenary-temperature-details">
        <div className="temperature-heading">Day {id} </div>
        <div className="temperature-icon-and-details-container">
          {weatherType === "sunny" && <LightModeIcon />}
          {weatherType === "cloudy" && <CloudQueueIcon />}
          {weatherType === "rainy" && <GrainIcon />}

          <div className="temperature-heading">{temperature} </div>
        </div>
      </div>
      <div className="facilities-container">
        <ul>
          {facilities?.map((facility: string, index: number) => (
            <li key={index} className="facility">
              {facility}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ItenaryDaySchedule;
