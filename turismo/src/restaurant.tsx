import React from "react";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
const Restaurante = () => {
  return (
    <>
      <div className="text-center ">
        <h1
          className="position-relative"
          style={{ margin: "auto", width: "100%" }}
        >
          Our guides
        </h1>
      </div>
      <main className="d-flex justify-content-evenly">
        <Row>
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card style={{ margin: "auto", width: "100%", height: "750px"}}>
              <Card.Img
                variant="top"
                src="https://i.blogs.es/8a2bff/240316-darksouls/450_1000.webp"
                style={{ width: "100%", margin: "auto", height: "40%" }} 
              />
              <Card.Body>
                <h2>Unveiling the Undead Merchant</h2>
                <Card.Text>
                  Welcome, adventurers, to the domain of the Crestfallen
                  Merchant! Join me on an extraordinary journey through the
                  enigmatic realm of Dark Souls. Discover ancient treasures and
                  enchanted stones of unimaginable power as we navigate through
                  the shadows. Fear not, for I am your guide, ready to lead you
                  on an unforgettable adventure. Step forth and embrace the
                </Card.Text>
              </Card.Body>
            </Card>
            {/* cerramos cada imagen o cada cuadrado de imagen con col /col */}
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card style={{ margin: "auto", width: "100%", height: "750px" }}>
              <Card.Img
                variant="top"
                src="https://images.theconversation.com/files/417296/original/file-20210822-15-aikb0t.jpg?ixlib=rb-1.1.0&rect=112%2C0%2C1485%2C742&q=45&auto=format&w=1356&h=668&fit=crop"
                style={{ width: "100%", margin: "auto", height: "40%" }}  
              />
              <Card.Body>
                <h2>Unveiling the Undead Merchant</h2>
                <Card.Text>
                  Embark on a journey into the depths of Dark Souls lore as you
                  uncover the enigmatic tale of Hawkeye Gough, once a revered
                  knight of Gwyn's four, now a solitary philosopher crafting
                  archtree carvings in solitude. Located beyond Artorias the
                  Abysswalker's domain, Gough's chamber requires the Crest Key
                  found within a Mimic in the chamber filled with Bloatheads and
                  the Bloathead Sorceress.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card style={{ margin: "auto", width: "100%", height: "750px" }}>
              <Card.Img
                variant="top"
                src="https://www.lavanguardia.com/andro4all/hero/2023/11/remnant2.jpg?width=768&aspect_ratio=16:9&format=nowebp"
                className="mb-2"
                style={{ width: "100%", margin: "auto", height: "40%" }}  
              />
              <Card.Body>
                <h2>Domhnall of Zena</h2>
                <Card.Text>
                  Information: Transitioning from the depths of Gough's lore, we
                  encounter Oswald of Carim, a grim figure entrenched in the
                  dealings of sin within Dark Souls. Emerging at the base of the
                  bell-tower in Undead Parish following the defeat of the
                  Gargoyles and the ringing of the bell, Oswald exudes an aura
                  of solemnity and purpose.Purging Stones at a fraction of the
                  of solemnity and purpose.Purging Stones 0AAPS5gAAAAAAAAAAAAAMNV
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card style={{ margin: "auto", width: "100%", height: "750px"  }}>
              <Card.Img
                variant="top"
                src="https://i.ebayimg.com/images/g/36wAAOSwn-VkTCcN/s-l1200.webp"
                className="mb-2 w-100 h-40" 
                style={{ width: "100%", margin: "auto", height: "40%" }} 
              />
              <Card.Body>
                <h2>Unveiling the Undead Merchant</h2>
                <Card.Text>
                  Welcome, adventurers, to the realm of Dark Souls. Today, we
                  unveil the enigmatic figure known as the Undead Merchant. Join
                  us as we delve into his offerings and unravel the mysteries
                  that surround him.
                  Welcome, adventurers, to the realm of Dark Souls. Today, we
                  unveil the enigmatic figure known as the Undead Merchant. Join
                  us as we delve into his offerings and unravel
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </main>
    </>
  );
};

export default Restaurante;