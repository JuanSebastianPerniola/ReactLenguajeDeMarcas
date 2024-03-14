import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Image from 'react-bootstrap/Image';
export type DetallesRazas = DetalleRaza[];

export interface DetalleRaza {
  weight: Weight
  height: Height
  id: number
  name: string
  bred_for?: string
  breed_group?: string
  life_span: string
  temperament?: string
  origin?: string
  reference_image_id: string
  country_code?: string
  description?: string
  history?: string
}

export interface Weight {
  imperial: string
  metric: string
}

export interface Height {
  imperial: string
  metric: string
}

export interface Weight {
  imperial: string;
  metric: string;
}

export interface RazaDetallesProps {
  
  id: string;
}


const RazaDetalles = ({ id }: { id: string }) => {
  const [detalleRaza, setDetalleRaza] = useState<DetalleRaza[]>([]);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  // fetch para la imagen 
  useEffect(() => {
    fetch(`https://api.thedogapi.com/v1/breeds/${id}`, {
      headers: {
        "x-api-key": "123456",
      },
    })
      .then((response) => response.json())
      .then((data: DetalleRaza) => {
        setDetalleRaza([data]);
        fetchImage(data.reference_image_id);
      });
  }, [id]);
  //fetch con ifs para saber si la iamgen es .jpg, o .png
  const fetchImage = (imageId: string) => {
    //`` se usa para poner ${variableN}
    fetch(`https://cdn2.thedogapi.com/images/${imageId}`, {
      //El método HEAD pide una respuesta idéntica a la de una petición GET, pero sin el cuerpo de la respuesta.
      method: 'HEAD'
    })
      .then((response) => {
        //respuesta que devuelve a la pagina 
        const contentType = response.headers.get('content-type'); // content-type 
        if (contentType && contentType.startsWith('image/png')) { //el && da error por como funciona react
          setImageUrl(`https://cdn2.thedogapi.com/images/${imageId}.png`);
        } else {
          setImageUrl(`https://cdn2.thedogapi.com/images/${imageId}.jpg`);
        }
      });
  };

  return (
    <div className="w-100% mb-10 m-auto">
      <h1 className="position-relative">Detalles Raza</h1>
      {detalleRaza.map((raza) => (
        <Card key={raza.id}>
          <Card.Body>
            <Card.Title>{raza.name}</Card.Title>
            <Card.Text>
              <h1>Bred for: {raza.life_span}</h1>
            </Card.Text>
            <Card.Text>
              <h1>Weight:</h1> {raza.weight.imperial} lbs ({raza.weight.metric} kg)
            </Card.Text>
            <Card.Text>
              <h1>Life span:</h1> {raza.life_span}
            </Card.Text>
            <Card.Text>
              <h1>Temperament:</h1> {raza.temperament}
            </Card.Text>
            <Card.Text>
              <h1>Details:</h1> {raza.description}
            </Card.Text>
            <Card.Img />
            {imageUrl && (
              <Image className="img-fluid"
                src={imageUrl}
                alt={raza.name}
                fluid
              />
            )}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default RazaDetalles;