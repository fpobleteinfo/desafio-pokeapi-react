import React, { useContext, useState } from "react";
import { ApiContext } from "../context/ApiContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const SelectPokemon = () => {
  const { data } = useContext(ApiContext)
  const [name, setName] = useState("")
  const navigate = useNavigate("")
  
  const irAPokemon = () =>{
    //console.log(name);
    navigate(`/pokemon/${name}`)

  }

  return (
    <>
      <Form.Group className="mb-3">
        <Form.Select>
          <option>Abre aquí para ver los Pokémon...</option>
          {data.map((c, index) => (
            <option key={index} value={name} onChange={({ target }) => setName(target.value)}>
              {c.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
       <Button variant="dark" type="submit" onClick={irAPokemon()} > 
        Ver Info
      </Button>
    </>
  );
};

export default SelectPokemon;
