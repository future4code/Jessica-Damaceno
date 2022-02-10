import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";
import { CharacterListPage, CharacterDetailPage } from "../pages/";

// import { CharacterListPage } from "../pages/CharacterListPage/CharacterListPage";
// import { CharacterDetailPage } from "../pages/CharacterDetailPage/CharacterDetailPage";

export const Router = () => {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<CharacterListPage />} />
        <Route path="/detalhes" element={<CharacterDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};
