import React from "react";

//styles
import { useToursDetailsStyles } from "./TourDetails.styled";
import { IconTitle } from "../../styledComponents";

//types
import { TourData } from "../../types/TourData";
import { useLocation, useNavigate } from "react-router-dom";

//src
import { CustomButton, TourImages } from "../../components";
import { TourHighlights } from "../../containers";
import ItenarySchedule from "../ItenarySchedule/ItenarySchedule";

const TourDetails = () => {
  const tourDetailsClasses = useToursDetailsStyles();
  const location: any = useLocation();
  const navigate = useNavigate();
  const TourData: TourData = location?.state?.tourData;

  return (
    <div className={tourDetailsClasses.tourDetailsContainer}>
      <h2 className={tourDetailsClasses.heading}>Pérez Art Museum Miami</h2>
      <div className={tourDetailsClasses.priceAndLocationDetails}>
        <IconTitle text={TourData?.price} iconName="price" bold={false} />
        <IconTitle text={TourData?.duration} iconName="time" bold={false} />
        <IconTitle text={TourData?.name} iconName="location" bold={false} />
      </div>
      <TourImages />

      <div className={tourDetailsClasses.tourDescription}>
        {TourData?.description}
      </div>
      <h2 className={tourDetailsClasses.heading}>What's included</h2>
      <TourHighlights />
      <h2 className={tourDetailsClasses.heading}>Itinerary Schedule</h2>
      <ItenarySchedule itenarySchedule={TourData?.itenarySchedule} />

      <div
        className={tourDetailsClasses.bookingButton}
        onClick={() => {
          navigate("/BookingDetails", { state: { tourId: TourData?.id } });
        }}
      >
        <CustomButton width="335px" text="Book Now" display="block" />
      </div>
    </div>
  );
};

export default TourDetails;
