import { Container } from "react-bootstrap";
import pokehome from "/poke-home.png"


const HomePage = () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Bienvenido a <span className="fw-bold">PokéDexter</span> 👾
      </h1>
      <h6> Encuentra informacion relevante sobre tu pokémon favorito </h6>
      <img src={pokehome} width={300} height={300} alt="logo" />
    </Container>
  );
};
export default HomePage;