import "./App.css";
import gatosDataJson from "./Gato.json"; // import JSON file
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

interface GatoData {
  id: string;
  Gato: number;
  DisponibleAdopcion: boolean;
  ImagenUrl: string;
  Ojos: number;
  properties: {
    description: string;
    type: string;
  };
  productName: {
    description: string;
    type: string;
  };
  price: {
    description: string;
    type: string;
    exclusiveMinimum: number;
  };
}

//declaramos (en este caso ) que la key es un string
//es una clave, para saber que estamos accediendo
//al json
const gatosData: { [key: string]: GatoData } = gatosDataJson;

function App() {
  return (
    <Container className="col-lg-1 d-flex align-items-stretch w-100">
      {Object.keys(gatosData).map((key) => {
        const gato = gatosData[key];
        return (
          <Card key={gato.id} className="m-1 mt-50 w-80">
            <Card.Body className="text-center">
              <Card.Title>Gato id : {gato.id} </Card.Title>
              <Card.Subtitle className="text-muted"></Card.Subtitle>
              <Image
                className=""
                src={gato.ImagenUrl}
                style={{ width: "500px", height: "250px" }}
                fluid
              />
              <Card.Text>
                Esta es una carta de presentacion para gatos
              </Card.Text>
              <Card.Text>
                Disponible para adopción:{" "}
                {gato.DisponibleAdopcion ? "Sí" : "No"}
              </Card.Text>
              <Card.Link>Card Link</Card.Link>
              <Card.Text>Ojos : {gato.Ojos}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
}

export default App;
