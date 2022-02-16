import { useEffect, useState } from "react";
import { getRestaurants } from "../../requests/api";

export const HomeScreen = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants().then(({ response }) => setRestaurants(response));
  }, []);
  return (
    <>
      <h1>home</h1>
      {restaurants.map((restaurant) => (
        <p key={restaurant.id}>{JSON.stringify(restaurants)}</p>
      ))}
    </>
  );
};
