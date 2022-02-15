import axios from "axios";
import { BASE_URL } from "../constants/url";

export const getStarshipsRender = (setGetStarships) => {
    axios
    .get(`${BASE_URL}/starships/`)
    .then(
      ({ data }) => setGetStarships(data.results)
      // console.log(data.results)
    )
    .catch((err) => console.log(err));
}