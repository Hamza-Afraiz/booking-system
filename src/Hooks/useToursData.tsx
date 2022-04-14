import { useQuery } from "react-query";
import { request } from "../utils/axios-utils";

export function useToursData() {
  return useQuery("toursData", fetchToursData);
}
const fetchToursData = async () => {
  let { data } = await request({ url: "/tours" });
  return data;
};
