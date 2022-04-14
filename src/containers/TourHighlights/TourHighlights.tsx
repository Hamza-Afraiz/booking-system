import React from "react";

//src
import { TourHighlightDescription } from "../../components";

//styles
import { useToursHighlightStyles } from "./TourHighlights.styled";
const TourHighlights = () => {
  const tourHighlightsClasses = useToursHighlightStyles();

  return (
    <div className={tourHighlightsClasses.tourHighlightsContainer}>
      <TourHighlightDescription description="Miami" heading="Destination" />
      <TourHighlightDescription description="2000 Brush St, Detroit, MI 48226, United States" heading="Departure Location" />
      <TourHighlightDescription description="7:00 PM on Day 3" heading="Return" />
      <TourHighlightDescription description="" heading="Facilities" />
    </div>
  );
};

export default TourHighlights;
