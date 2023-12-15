import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const DetailsPokemonPage = () => {

const { name } = useParams()
const [dataPoke, setDataPoke] = useState([])

const url = `https://pokeapi.co/api/v2/pokemon/${name}`;


const apiPokeDetail = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Ha habido un error en la API");
    }
    const info = await response.json();
    setDataPoke(info.stats);

    console.log(info.stats)

  } catch (error) {
    console.error({ message: error });
  }
};

useEffect(() => {
  apiPokeDetail();
}, []);


  return (
    <>
    <div className='container'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      
      <ListGroup className="list-group-flush">
      {dataPoke.map((stat, index) => (
        <ListGroup.Item key={index}>
          El stat '{stat.stat.name}' tiene un valor de base_stat de {stat.base_stat}.
        </ListGroup.Item>
      ))}
      </ListGroup>

    </Card>
    </div>
    </>
  )
}

export default DetailsPokemonPage