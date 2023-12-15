import { Container, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faHomeUser } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "text-warning ms-3 text-decoration-none active" : "text-white ms-3 text-decoration-none");

  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/');
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container className="justify-content-start">
        <Navbar.Brand onClick={handleClick}>PokéDexter</Navbar.Brand>
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
