import { useEffect, useState } from "react";
import { getRestaurants } from "../../Requests/api";
import { RestaurantCard, SearchBox } from "../../Components";
// import { GlobalStyle } from "../../Constants/globalStyle";
import { ScreenTitle, RestaurantCardsContainerS } from "./HomeSTYLED";

export const HomeScreen = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const onChangeSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    getRestaurants().then(({ response }) => {
      // console.log(response);
      setRestaurants(response);
    });
  }, []);

  const filterRestaurants = (restaurant) => {
    if(searchTerm === "") return true; 
    if(restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())) return true;
    return false;
  }
  

  return (
    <>
      {/* <Header className="header" /> */}
      <ScreenTitle>Bem-vindo ao Lista Rango</ScreenTitle>
      <SearchBox value={searchTerm} onChange={onChangeSearchTerm} />
      <RestaurantCardsContainerS>
        {restaurants.filter(filterRestaurants).map((restaurant, i) => (
          <RestaurantCard
            key={restaurant.id}
            name={restaurant.name}
            address={restaurant.address}
          />
        ))}
      </RestaurantCardsContainerS>
    </>
  );
};
