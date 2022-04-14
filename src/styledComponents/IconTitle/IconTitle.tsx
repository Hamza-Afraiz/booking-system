//lib
import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";
import DateRangeIcon from "@mui/icons-material/DateRange";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AccessTimeSharpIcon from "@mui/icons-material/AccessTimeSharp";
import DoneIcon from "@mui/icons-material/Done";
//Src

//styles
import { useIconTitleStyles } from "./IconTitle.styled";
interface iconTitleProps {
  text?: string;
  iconName?: string;
  bold?: boolean;
}
const IconTitle = ({ text, iconName, bold }: iconTitleProps) => {
  const IconTitleClasses = useIconTitleStyles({ bold });
  return (
    <div className={IconTitleClasses.iconsContainer}>
      <div className={IconTitleClasses.icon}>
        {iconName === "arrow-up" && (
          <KeyboardArrowUpIcon
            fontSize="small"
            sx={{ color: "#75778B", fontSize: "1rem" }}
            className={IconTitleClasses.icon}
          />
        )}
        {iconName === "location" && (
          <LocationOnTwoToneIcon 
          fontSize="small"sx={{ color: "#75778B", fontSize: "1rem" }} />
        )}
        {iconName === "date" && (
          <DateRangeIcon
            fontSize="small"
            sx={{ color: "#75778B", fontSize: "1rem" }}
          />
        )}
        {iconName === "price" && (
          <MonetizationOnIcon
            fontSize="small"
            sx={{ color: "#75778B", fontSize: "1rem" }}
          />
        )}
        {iconName === "time" && (
          <AccessTimeSharpIcon
            fontSize="small"
            sx={{ color: "#75778B", fontSize: "1rem" }}
          />
        )}
        {iconName === "done" && (
          <DoneIcon
            fontSize="small"
            sx={{ color: "#F16B51", fontSize: "0.7rem" }}
          />
        )}
      </div>

      <div className={IconTitleClasses.iconTitle}>{text}</div>
    </div>
  );
};

export default IconTitle;
