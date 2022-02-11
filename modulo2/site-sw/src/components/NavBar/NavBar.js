import { NavBarStyle } from "./NavBarSTYLE";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigation = useNavigate();

  return (
    <NavBarStyle>
      <ul>
        <h1>Star Wars catalog</h1>
        <div>
          <li onClick={() => navigation("/")}>Home</li>
          <li onClick={() => navigation("/personagens")}>Pilots</li>
          <li onClick={() => navigation("/detalhes")}>Starships</li>
        </div>
      </ul>
    </NavBarStyle>
  );
};
