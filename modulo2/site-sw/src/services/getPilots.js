import axios from "axios";
import { BASE_URL } from "../constants/url";


export const getPilotsRender = (setGetPilots) => {
     axios
    .get(`${BASE_URL}/people/`)
    .then(
      ({ data }) => setGetPilots(data.results)
      // console.log(data.results)
    )
    .catch((err) => console.log(err));
     
}

