import { useEffect, useState } from "react";
import { getRestaurants } from "../../Requests/api";
import { RestaurantCard } from "../../Components/RestaurantCard/RestaurantCard";

export const HomeScreen = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants().then(({ response }) => {
      console.log(response);
      setRestaurants(response);
    });
  }, []);
  return (
    <>
      <h1>home</h1>
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          name={restaurant.name}
          address={restaurant.address}
        />
      ))}
    </>
  );
};
