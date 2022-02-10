// import {CharacterDetailPage} from "./pages/CharacterDetailPage/CharacterDetailPage";
// import { CharacterListPage } from "./pages/CharacterListPage/CharacterListPage";
import { Router } from "./Routes/Router"

function App() {
  return (
    <div>
      <header>
        <h1>Star Wars</h1>
      </header>
      {/* <CharacterListPage/>
      <CharacterDetailPage/> */}
        <Router/>
    </div>
    
  );
}

export default App;
