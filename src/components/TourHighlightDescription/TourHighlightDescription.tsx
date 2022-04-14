import React from "react";
import { IconTitle } from "../../styledComponents";
import "./TourHighlightDescription.css";

interface HighlightsProps {
  heading: string;
  description: string;
}
const TourHighlightsDescription = ({
  heading,
  description,
}: HighlightsProps) => {
  return (
    <div className="highlight-description-container">
      <div className="highlight-heading">{heading}</div>
      <div className="highlight-description">
        {description}
        {!description && (
          <div className="facilities">
            <IconTitle text="Basic first aid kit" iconName="done" bold={true} />
            <IconTitle
              text="Waterproof Tents on twin/triple Sharing"
              iconName="done"
              bold={true}
            />
            <IconTitle text="Detail Guided Maps" iconName="done" bold={true} />
            <IconTitle
              text="Comfortable Private Booked Transport"
              iconName="done"
              bold={true}
            />
            <IconTitle text="Fuel Expense" iconName="done" bold={true} />
            <IconTitle text="Basic first aid kit" iconName="done" bold={true} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TourHighlightsDescription;
