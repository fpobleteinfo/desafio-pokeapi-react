import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faHomeUser } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "text-warning ms-3 text-decoration-none active" : "text-white ms-3 text-decoration-none");

  return (
    <Navbar bg="dark" variant="dark">
      <Container className="justify-content-start">
        <Navbar.Brand>PokéDexter</Navbar.Brand>
        {/* Links */}
        <NavLink to="/" className={setActiveClass}>
        <FontAwesomeIcon icon={faHomeUser} /> Inicio
        </NavLink>
        
        <NavLink to="/pokemon" className={setActiveClass}>
        <FontAwesomeIcon icon={faStar} /> Busca tu Pokémon
        </NavLink>
      </Container>
    </Navbar>
  );
};
export default Navigation;
