import { Container } from "react-bootstrap";
import SelectPokemon from "../components/SelectPokemon";


const PokemonPage = () => {
  return (
    <Container className="text-center">
      <p className="pt-5">
        Selecciona un <span className="fw-bold">Pokémon</span> de la lista para revisar su información
      </p>
      <SelectPokemon/>
    </Container>
  );
};
export default PokemonPage;
