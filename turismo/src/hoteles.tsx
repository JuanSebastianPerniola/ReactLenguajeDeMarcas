import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
const hoteles = () => {
  return (
    <>
    <div className="text-center ">
      <h1
        className="position-relative"
        style={{ margin: "auto", width: "80%" }}
      >
       Hoteles
      </h1>
    </div>
    <main>
    <Row>
      <div className="col-lg-3 mb-3 d-flex align-items-stretch">
          {/* <Col xs={12} sm={6} md={4} lg={3}> */}
            <Card className="w-80">
              <Card.Img
                
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTivVB7WYlfgcoWckh-CpWApWsmVbq85CfA2CEBRF7ArwHGqujjTJBSL7yjPQ&s"
                style={{ width: "100%", margin: "auto", height: "40%" }}
              />{" "}
              
              <Card.Body>
              <h2>Sen`s fortress</h2>
                <Card.Text className="mb-">
                  Enter the Refuge of the Dead, a solemn sanctuary nestled
                  within the darkened depths of Lordran. This eerie refuge,
                  shrouded in shadows and silence, offers a sanctuary for those
                  who seek solace amidst the whispers of the departed. 🔥🔥🔥
                  who seek solace amidst the whispers of the departed. 🔥🔥🔥
                  
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          {/* second interest point */}
          <div className=" col-lg-3 mb-2 d-flex align-items-stretch">
          {/* <Col xs={12} sm={6} md={4} lg={3}> */}
            <Card className="mb-2 w-80">
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp1Y0EMtXbJEAtRCrlqtDIL5s2ySTIqhCuqg&usqp=CAU"
                style={{ width: "100%", margin: "auto", height: "40%" }}
              />
              
              <Card.Body>
              <h2>Colisium</h2>
                <Card.Text className="mb-2">
                  Enter Undead Burg, a bustling district teeming with life and
                  activity, yet haunted by the specter of the undead. Here,
                  amidst the flickering torchlight and echoing footsteps,
                  adventure awaits those brave enough to traverse its winding
                  streets and shadowy alleys. ☀️☀️☀️
                  streets and shadowy alleys. ☀️☀️☀️ streets and shadowy alleys. ☀️☀️☀️
                </Card.Text>
              </Card.Body>
            </Card>
          {/* </Col> */}
          </div>
          <div className="col-lg-3 mb-3 d-flex align-items-stretch">
            <Card className="w-80">
              <Card.Img
                variant="top"
                src="https://image.api.playstation.com/cdn/EP0700/CUSA03365_00/OFMeAw2KhrdaEZAjW1f3tCIXbogkLpTC.png"
                style={{ width: "100%", margin: "auto", height: "40%" }}
              />
              
              <Card.Body>
              <h2> Anor londo</h2>
                <Card.Text>
                  Welcome to "The Depths," a labyrinthine underworld hidden
                  beneath the bustling city of Lordran. Dive into the shadows
                  and uncover the mysteries that lurk within this dark and
                  foreboding realm.
                  and uncover the mysteries that lurk within this dark and
                  foreboding realm.
                  and uncover the mysteries that lurk within this dark and
                  foreboding realm. 
                </Card.Text>
              </Card.Body>
            </Card>
          {/* </Col> */}
          </div >

          {/* <Col xs={12} sm={6} md={4} lg={3}> */}
          <div className="col-lg-3 mb-2 d-flex align-items-stretch">
            <Card className="mb-2 w-80">
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQcOU14AmwQR9NcRA2qn4mF43AMpct6ASp3A&usqp=CAU"
                style={{ width: "100%", margin: "auto", height: "40%" }}
              />
              
              <Card.Body>
              <h2>Tomb of  Giants
              </h2>
                <Card.Text>
                  Step into the surreal wonder of the Endless Garden, a realm of
                  boundless beauty and infinite possibilities. Nestled beyond
                  the confines of ordinary reality, this ethereal landscape
                  offers a glimpse into a realm where time and space converge in
                  a mesmerizing tapestry of colors and shapes.
                  foreboding realm.
                  and uncover the mysteries that lurk within this dark and
                  foreboding realm. foreboding realm.
                  and uncover the mysteries that lurk within this dark and
                  foreboding realm. 
                </Card.Text>
              </Card.Body>
            </Card>
          {/* </Col> */}
          </div>
        </Row>
    </main>
    </>
  );
};

export default hoteles;
