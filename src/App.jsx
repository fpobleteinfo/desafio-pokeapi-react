import "./App.css";
import Navigation from "./components/Navigation";
import HomePage from "./views/HomePage";
import PokemonPage from "./views/PokemonPage";
import NotFound from "./views/NotFound";
import { Route, Routes } from "react-router-dom";
import ApiProvider from "./context/ApiContext";

function App() {
  return (
    <>
      <ApiProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemon" element={<PokemonPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ApiProvider>
    </>
  );
}

export default App;
