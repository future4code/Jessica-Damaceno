// import {CharacterDetailPage} from "./pages/CharacterDetailPage/CharacterDetailPage";
// import { CharacterListPage } from "./pages/CharacterListPage/CharacterListPage";
import { GlobalStyle } from "./constants/globalStyle";
import { Router } from "./Routes/Router";

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <Router />
        {/* <CharacterListPage/>
      <CharacterDetailPage/> */}
      </div>
    </>
  );
}

export default App;
