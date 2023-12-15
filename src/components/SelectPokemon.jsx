import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ApiContext } from "../context/ApiContext";
import { useNavigate } from "react-router-dom";

const SelectPokemon = () => {
  const { data, selectData, setselectData } = useContext(ApiContext);
  const navigate = useNavigate();

  const irAPokemon = () => {
    navigate(`/pokemon/${selectData}`);
  };

  return (
    <>
      <Form.Group className="mb-3">
        <Form.Select
          value={selectData}
          onChange={({ target }) => setselectData(target.value)}
        >
          <option>Abre aquí para ver los Pokémon...</option>
          {data.map((c) => (
            <option key={c.name}>{c.name}</option>
          ))}
        </Form.Select>
      </Form.Group>
      <Button variant="dark" type="submit" onClick={irAPokemon}>
        Ver Info
      </Button>
    </>
  );
};

export default SelectPokemon;
