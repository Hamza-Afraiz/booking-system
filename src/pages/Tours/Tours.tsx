import { useTheme } from "@mui/material/styles";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoadingSpinner, PopUpNotification, Tour } from "../../components";
import {
  useBookedToursData,
  useDeleteBooking,
} from "../../hooks/useBookedTours";
import { useSearchFilters } from "../../hooks/useSearchFilters";
import { useToursData } from "../../hooks/useToursData";
import { BookingDetails } from "../../types/BookingDetails";
import { TourData } from "../../types/TourData";
//src
import { useToursStyles } from "./Tours.styled";
interface ToursProps {
  isBookedTours: boolean;
}

const Tours = ({ isBookedTours }: ToursProps) => {
  const location: any = useLocation();
  const toursClasses = useToursStyles();
  const theme = useTheme();
  const navigate = useNavigate();

  const filters: any = location?.state?.filters;
  const SearchedToursData = useSearchFilters(filters ? filters : undefined);

  const [ToursData, setToursData] = React.useState<TourData[]>([]);
  const [notification, setNotification] = React.useState(false);
  const [deleteBookingId, setDeleteBookingId] = React.useState("");

  const {
    data: AvailableToursData,
    isFetching: isFetchingTours,
    isLoading: isLoadingTours,
  } = useToursData();

  const { data: BookedToursData } = useBookedToursData();
  const { mutate: DeleteBooking, isLoading, isSuccess } = useDeleteBooking();

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
        bookingTourDetails: BookedToursData?.find(
          (AvailableTour: BookingDetails) =>
            AvailableToursData?.some(
              (BookedTour: TourData) => AvailableTour.tourId === BookedTour.id
            )
        ),
      },
    });
  };

  const deleteBookingDetails = (tourId: number | undefined) => {
    
    setDeleteBookingId(tourId?.toString() || "");
    const tourData = AvailableToursData?.find(
      (tour: TourData) => tour.id === tourId
    );

    const tourStartingTime = Math.ceil(
      (new Date(tourData.startDate).getTime() - new Date().getTime()) /
        (1000 * 60 * 60 * 24)
    );
    if (tourStartingTime < 3) {
      setNotification(true);
      return;
    }

    DeleteBooking({
      bookingId: BookedToursData?.find(
        (AvailableTour: BookingDetails) => AvailableTour?.tourId === tourId
      ).id.toString(),
    });
  };

  React.useEffect(() => {
    if (location?.state?.filters) setToursData(SearchedToursData);
    else if (isBookedTours) {
      setToursData(
        AvailableToursData?.filter((AvailableTour: TourData) =>
          BookedToursData?.some(
            (BookedTour: BookingDetails) =>
              AvailableTour.id === BookedTour.tourId
          )
        )
      );
    } else {
      setToursData(AvailableToursData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBookedTours, AvailableToursData, BookedToursData, deleteBookingId]);

  return (
    <div className={toursClasses.toursContainer}>
      {notification && (
        <PopUpNotification
          popUpText="You cant delete the tour because remaining days are less than 3 now."
          onOk={() => {setNotification(false)}}
        />
      )}
      {isSuccess && (
        <PopUpNotification popUpText="Deleted Successfully." onOk={() => {setNotification(false)}} />
      )}
      {!!SearchedToursData?.length && (
        <h1 className={toursClasses.heading}>
          Top Destinations At “{filters?.tourLocation}”
        </h1>
      )}
      {!ToursData?.length && (
        <div className={toursClasses.emptyState}>
          <img
            src={require("./../../assets/images/emptyState.png")}
            alt="background-home"
          />
          <div className={toursClasses.emptyStateText}>
            We haven't found any results for you
          </div>
        </div>
      )}
      {(isFetchingTours || isLoadingTours || isLoading) && (
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
            deleteBookingDetails={deleteBookingDetails}
          />
        ))}
      </div>
    </div>
  );
};

export default Tours;
