import { useEffect, useState } from "react";
import { getRestaurants } from "../../Requests/api";
import { RestaurantCard } from "../../Components/RestaurantCard/RestaurantCard";
// import { GlobalStyle } from "../../Constants/globalStyle";
import { ScreenTitle, RestaurantCardContainerS } from "./HomeSTYLED";

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
      {/* <Header className="header" /> */}
      <ScreenTitle>Bem-vindo ao Lista Rango</ScreenTitle>
      {restaurants.map((restaurant) => (
        <RestaurantCardContainerS>
          <RestaurantCard
            key={restaurant.id}
            name={restaurant.name}
            address={restaurant.address}
          />
        </RestaurantCardContainerS>
      ))}
    </>
  );
};
