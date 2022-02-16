import axios from "axios";
import { BASE_URL } from "../constants/url";

export const getRestaurants = async () => {
  let error;
  let response;
  try {
    const { data } = await axios.get(`${BASE_URL}`);
    response = data;
  } catch (e) {
    error = e;
  }
  return {
    error,
    response,
  };
};
