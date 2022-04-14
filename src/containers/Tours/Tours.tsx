import { useTheme } from "@mui/material/styles";
import React from "react";
import { useNavigate } from "react-router-dom";
import { LoadingSpinner, Tour } from "../../components";
import { useBookedToursData } from "../../Hooks/useBookedTours";
import { useToursData } from "../../Hooks/useToursData";
import { TourData } from "../../types/TourData";
//src
import { useToursStyles } from "./Tours.styled";
interface ToursProps {
  isBookedTours: boolean;
}

const Tours = ({ isBookedTours }: ToursProps) => {
  const { data: AvailableToursData, isFetching: isFetchingTours } =
    useToursData();
  const { data: BookedToursData, isFetching } = useBookedToursData();

  const [ToursData, setToursData] = React.useState<TourData[]>([]);
  const theme = useTheme();
  const navigate = useNavigate();

  const toursClasses = useToursStyles();

  const viewTourDetails = (tourId: number | undefined) => {
    navigate("/tourDetails", {
      state: {
        tourData: ToursData?.find((tour: TourData) => tour.id === tourId),
      },
    });
  };

  React.useEffect(() => {
    console.log(isBookedTours);

    if (isBookedTours) {
      console.log(BookedToursData);
      console.log(
        "tourData",
        AvailableToursData?.filter(
          (tour: TourData) =>
            tour?.id === BookedToursData["bookingData"]?.tourId
        )
      );
      setToursData(
        AvailableToursData?.filter(
          (tour: TourData) =>
            tour?.id === BookedToursData["bookingData"]?.tourId
        )
      );
    } else {
      setToursData(AvailableToursData);
    }
  }, [isBookedTours, AvailableToursData, BookedToursData]);

  return (
    <div className={toursClasses.toursContainer}>
      <h1 className={toursClasses.heading}>Top Destinations At “Miami”</h1>
      {isFetchingTours && (
        <div className={toursClasses.loadingSpinner}>
          <LoadingSpinner
            width="40%"
            height="20%"
            color={theme.color.primary}
          />
        </div>
      )}
      <div className={toursClasses.tours}>
        {ToursData?.map((tour: TourData) => (
          <Tour
            key={tour.id}
            id={tour.id}
            description={tour.description}
            name={tour.name}
            duration={tour.duration}
            price={tour.price}
            viewTourDetails={viewTourDetails}
            isBookedTours={isBookedTours}
          />
        ))}
      </div>
    </div>
  );
};

export default Tours;
