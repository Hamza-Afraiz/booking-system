//lib
import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
//src
import { useTourStyles } from "./Tour.styled";
import { IconTitle } from "../../styledComponents";
import CustomButton from "../CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";

interface TourData {
  id?: number;
  name?: string;
  description?: string;
  price?: string;
  duration?: string;
  isBookedTours: boolean;
  viewTourDetails: (tourId: number | undefined) => void;
}

const Tour = ({
  id,
  name,
  description,
  price,
  duration,
  isBookedTours,
  viewTourDetails,
}: TourData) => {
  const [viewButtonStyle, setViewButtonStyle] = React.useState("none");

  const tourStyles = useTourStyles();

  return (
    <div
      className={tourStyles.tourContainer}
      onMouseEnter={(e) => {
        setViewButtonStyle("block");
      }}
      onMouseLeave={(e) => {
        setViewButtonStyle("none");
      }}
    >
      <img
        className={tourStyles.tourImage}
        src={require("./../../assets/images/landingPageImage.png")}
        alt="background-home"
      />
      <div className={tourStyles.tourDetailsContainer}>
        <div className={tourStyles.tourName}>{name}</div>
        <div className={tourStyles.tourDescription}>
          {description?.substring(0, 95)}..
        </div>
        <div className={tourStyles.priceAndTimeDetails}>
          {viewButtonStyle === "none" && (
            <>
              {" "}
              <IconTitle text={price} iconName="price" bold={false} />
              <IconTitle text={duration} iconName="time" bold={false} />
            </>
          )}
        </div>
        {!isBookedTours && (
          <div
            className={tourStyles.priceAndTimeDetails}
            onClick={() => {
              viewTourDetails(id);
            }}
          >
            <CustomButton
              text="View Details"
              width="100%"
              display={viewButtonStyle}
            />
          </div>
        )}
        {isBookedTours && (
          <div
            className={tourStyles.priceAndTimeDetails}
            onClick={() => {
              viewTourDetails(id);
            }}
          >
            <DeleteOutlinedIcon sx={{ color : "#F16B51",display:viewButtonStyle }} />
            <CustomButton
              text="Details"
              width="90%"
              display={viewButtonStyle}
            />
            <CustomButton
              text="Update"
              width="90%"
              display={viewButtonStyle}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tour;
