import { useState } from "react";
import "./styles.css";
import { data } from "./data/data";
import CardName from "./components/CardName/index.jsx"
import CardPeople  from "./components/CardPeople/CardPeople"

export default function App() {
  const [people, setPeople] = useState([]);

  const renderiza = () => {
    setPeople(data);
  };

  const lista = people.map((item) => {
    return(
      <CardPeople name= {item.name} height= {item.height} mass={item.mass} hair_color={item.hair_color} eye_color={item.eye_color} birth_year={item.birth_year} gender={item.gender}/>
    )
  });

  return (
    <div className="App">
      <h1>Renderização de lista</h1>
      <button className="Botao" onClick={renderiza}>Renderiza lista</button>
      <div className="List">
        <ul>
          {lista}
        </ul>
      </div>
    </div>
  );
}
