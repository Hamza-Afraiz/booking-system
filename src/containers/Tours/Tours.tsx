import { useTheme } from "@mui/material/styles";
import React from "react";
import { useNavigate } from "react-router-dom";
import { LoadingSpinner, Tour } from "../../components";
import { useBookedToursData } from "../../Hooks/useBookedTours";
import { useToursData } from "../../Hooks/useToursData";
import { BookingDetails } from "../../types/BookingDetails";
import { TourData } from "../../types/TourData";
//src
import { useToursStyles } from "./Tours.styled";
interface ToursProps {
  isBookedTours: boolean;
}

const Tours = ({ isBookedTours }: ToursProps) => {
  const { data: AvailableToursData, isFetching: isFetchingTours } =
    useToursData();
  const { data: BookedToursData } = useBookedToursData();
  console.log("booked data", BookedToursData, "avaiable", AvailableToursData);

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
  const editTourDetails = (tourId: number | undefined) => {
    navigate("/bookingDetails", {
      state: {
        bookingTourDetails: BookedToursData?.find((o1: BookingDetails) =>
          AvailableToursData?.some((o2: TourData) => o1.tourId === o2.id)
        ),
      },
    });
  };

  React.useEffect(() => {
    console.log(isBookedTours);

    if (isBookedTours) {
      console.log(BookedToursData);
      console.log(
        "SEARCHED",
        BookedToursData?.find((o1: BookingDetails) =>
          AvailableToursData?.some((o2: TourData) => o1.tourId === o2.id)
        )
      );
      setToursData(
        AvailableToursData?.filter((o1: TourData) =>
          BookedToursData?.some((o2: BookingDetails) => o1.id === o2.tourId)
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
            editTourDetails={editTourDetails}
          />
        ))}
      </div>
    </div>
  );
};

export default Tours;
