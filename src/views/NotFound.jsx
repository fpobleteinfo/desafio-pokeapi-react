import React from "react";
import { Container } from "react-bootstrap";
import notfoundpoke from "/notfoundpoke.png"

const NotFound = () => {
  return (
    <>
    <Container className="text-center">
      <p className="pt-5">
        La ruta que intenta acceder no existe... 
      </p>
      <img src={notfoundpoke} alt="notfound" />
    </Container>
    </>
  );
};

export default NotFound;
