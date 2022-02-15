import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";
import { HomePage, CharacterListPage, CharacterDetailPage } from "../pages/";
// import { HomePageContainer } from "../pages/HomePage/HomeSTYLE";

// import { CharacterListPage } from "../pages/CharacterListPage/CharacterListPage";
// import { CharacterDetailPage } from "../pages/CharacterDetailPage/CharacterDetailPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/personagens" element={<CharacterListPage />} />
        <Route path="/detalhes" element={<CharacterDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};
