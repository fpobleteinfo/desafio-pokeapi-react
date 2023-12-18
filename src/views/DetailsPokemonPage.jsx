import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Tags from "../components/Tags";
import Badge from "react-bootstrap/Badge";

const DetailsPokemonPage = () => {
  const { name } = useParams();
  const [dataPoke, setDataPoke] = useState([]);
  const [dataImgPoke, setImgDataPoke] = useState({});
  //const [dataIdPoke, setIdPoke] = useState("");
  
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  const apiPokeDetail = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Ha habido un error en la API");
      }
      const info = await response.json();
      setDataPoke(info.stats)
      //setIdPoke(info.id)
      setImgDataPoke(info.sprites.other.dream_world)



    } catch (error) {
      console.error({ message: error });
    }
  };

  useEffect(() => {
    apiPokeDetail();
  }, [name]);

  const obtenerColorTag = (stat) => {
    switch (stat) {
      case "hp":
        return "success";
      case "attack":
        return "danger";
      case "defense":
        return "primary";
      case "special-attack":
        return "warning";
      case "special-defense":
        return "info";
      case "speed":
        return "secondary";
      default:
        return "secondary";
    }
  };

  return (
    <>
      <div className="container-poke">
        <Card style={{ width: "18rem" }} className="poke-card">
          <Card.Img variant="top" src={dataImgPoke.front_default} className="svg-poke" />
          <Card.Body>
            <Card.Title>{name}
            {/* <Badge bg="danger">
            #{dataIdPoke}
              </Badge>             */}
            </Card.Title>
          </Card.Body>

          <ListGroup as="ol">
          {dataPoke.map((stat, index) => (
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
              key={index}
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                <Tags
                  colorTag={obtenerColorTag(stat.stat.name)}
                  stat={stat.stat.name}
                />                  
                </div>
              </div>
              <Badge bg="dark" pill>
              {stat.base_stat}
              </Badge>
            </ListGroup.Item>
             ))}
          </ListGroup>
        </Card>
      </div>
    </>
  );
};

export default DetailsPokemonPage;
