import { TourData } from "../types/TourData";
import { useToursData } from "./useToursData";

export const useSearchFilters = (filters: any) => {
  const { data: ToursData } = useToursData();

  const FilteredData = ToursData?.filter(function (tourData: TourData) {
    return (
      tourData?.price?.includes(filters?.price) &&
      tourData?.name?.includes(filters?.tourLocation) &&
      tourData?.startDate?.includes(filters?.tourStartDate)
    );
  });
  //const FilteredToursData=ToursData?.filter

  return FilteredData;
};
