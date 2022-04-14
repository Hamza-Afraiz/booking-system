import axios from "axios";

const client = axios.create({ baseURL: " http://localhost:3001" });
export const request = ({ ...options }) => {
  const onSuccess = (response: any) => {
    return response;
  };

  return client(options).then(onSuccess);
};
