//lib
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import React from "react";
import { IconTitle } from "../../styledComponents";
import CustomButton from "../CustomButton/CustomButton";
//src
import { useTourStyles } from "./Tour.styled";

interface TourData {
  id?: number;
  name?: string;
  description?: string;
  price?: string;
  duration?: string;
  isBookedTours: boolean;
  viewTourDetails: (tourId: number | undefined) => void;
  editTourDetails: (tourId: number | undefined) => void;
}

const Tour = ({
  id,
  name,
  description,
  price,
  duration,
  isBookedTours,
  viewTourDetails,
  editTourDetails,
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
          <div className={tourStyles.priceAndTimeDetails}>
            <DeleteOutlinedIcon
              sx={{ color: "#F16B51", display: viewButtonStyle }}
            />
            <div
              className={tourStyles.customButton}
              onClick={() => {
                viewTourDetails(id);
              }}
            >
              <CustomButton
                text="Details"
                width="90%"
                display={viewButtonStyle}
              />
            </div>

            <div
              className={tourStyles.customButton}
              onClick={() => {
                editTourDetails(id)
              }}
            >
              <CustomButton
                text="Update"
                width="90%"
                display={viewButtonStyle}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tour;
