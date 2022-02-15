import { NavBarStyle, LiNotHighlighted, LiWithProminence } from "./NavBarSTYLE";
import { useNavigate, useLocation } from "react-router-dom";

export const NavBar = () => {
  const navigation = useNavigate();

  const location = useLocation();
  // console.log(location);

  return (
    <NavBarStyle>
      <ul>
        <h1>Star Wars catalog</h1>
        <div>
          {location.pathname === "/" ? (
            <LiWithProminence onClick={() => navigation("/")}>
              Home
            </LiWithProminence>
          ) : (
            <LiNotHighlighted onClick={() => navigation("/")}>
              Home
            </LiNotHighlighted>
          )}
          
          {location.pathname === "/detalhes" ? (
            <LiWithProminence onClick={() => navigation("/detalhes")}>
              Starships
            </LiWithProminence>
          ) : (
            <LiNotHighlighted onClick={() => navigation("/detalhes")}>
              Starships
            </LiNotHighlighted>
          )}

          {location.pathname === "/personagens" ? (
            <LiWithProminence onClick={() => navigation("/personagens")}>
              Pilots
            </LiWithProminence>
          ) : (
            <LiNotHighlighted onClick={() => navigation("/personagens")}>
              Pilots
            </LiNotHighlighted>
          )}
        </div>
      </ul>
    </NavBarStyle>
  );
};
