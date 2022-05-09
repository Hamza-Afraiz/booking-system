import { TourData } from "../types/TourData";
import { useToursData } from "./useToursData";

export const useSearchFilters = (filters: any) => {
  const { data: ToursData } = useToursData();

  if (!filters) return;
  const FilteredData = ToursData?.filter(function (tourData: TourData) {
    const priceRange = filters?.price?.split(",");

    return (
      parseInt(tourData?.price || "NaN") >= parseInt(priceRange[0]) &&
      parseInt(tourData?.price || "NaN") <= parseInt(priceRange[1]) &&
      tourData?.name?.includes(filters?.tourLocation) &&
      tourData?.startDate?.includes(filters?.tourStartDate)
    );
  });
  //const FilteredToursData=ToursData?.filter

  return FilteredData;
};
