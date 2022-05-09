import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { BookingDetails } from "../types/BookingDetails";
import { request } from "../utils/axios-utils";

export function useBookedToursData() {
  return useQuery("bookedToursData", fetchBookedToursData);
}
const fetchBookedToursData = async () => {
  let { data } = await request({ url: "/bookedTourDetails" });
  return data;
};
export const CreateBooking = async (bookingData: BookingDetails) => {
  return await request({
    url: "/bookedTourDetails",
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: bookingData,
  });
};
export const DeleteBooking = async (bookingId: string | undefined) => {
  return await request({
    url: `/bookedTourDetails/${bookingId}`,
    method: "delete",
    headers: { "Content-Type": "application/json" },
  });
};
export const useDeleteBooking = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ bookingId }: { bookingId: string }) => DeleteBooking(bookingId),
    {
      onSettled: () => {
        queryClient.invalidateQueries("bookedToursData");
      
      },
    }
  );
};
export const useSumbitBooking = () => {
  const queryClient = useQueryClient();
  return useMutation(({bookingData}:{bookingData:BookingDetails}) => CreateBooking(bookingData), {
    onSettled: () => {
  
      queryClient.invalidateQueries("bookedToursData");
      queryClient.invalidateQueries("toursData");
    },
  });
};
export const useBookedTours = () => {
  const [isBookedTours, showBookedTours] = React.useState(false);
  return { showBookedTours, isBookedTours };
};
