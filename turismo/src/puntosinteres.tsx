import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Interes = () => {
  return (
    <>
      <div className="text-center">
        <h1
          className="position-relative"
          style={{ margin: "auto", width: "100%" }}
        >
          Welcome to Anor Londo!
        </h1>
      </div>
      <main className="cajaOrganizar">
        <Row>
          {/* First interest point */}

           <div className="col-lg-3 mb-3 d-flex align-items-stretch">
             <Card className="w-80">
              <Card.Img
                variant="top"
                src="https://cdn.vox-cdn.com/thumbor/OzcVRUW5jUrVRh9aKzsZbwR-TYg=/0x114:2880x1622/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/11481565/Firelink_Shrine_cover.png"
                style={{ width: "100%", margin: "auto", height: "40%" }}
              />
             
              <Card.Body>
              <h2>Refuge of the Dead</h2>
                <Card.Text>
                  Enter the Refuge of the Dead, a solemn sanctuary nestled
                  within the darkened depths of Lordran. This eerie refuge,
                  shrouded in shadows and silence, offers a sanctuary for those
                  who seek solace amidst the whispers of the departed. 🔥🔥🔥
                </Card.Text>
              </Card.Body>
            </Card>
        </div>
          {/* Second interest point */}
           <div className="col-lg-3 mb-3 d-flex align-items-stretch">
             <Card className="w-80">
              <Card.Img
                variant="top"
                src="https://www.stevestreeting.com/images/Undead_burgh_upper.jpg"
                style={{ width: "100%", margin: "auto", height: "40%" }}
              />
              
              <Card.Body><h2>The Undead Burg</h2>
                <Card.Text>
                  Enter Undead Burg, a bustling district teeming with life and
                  activity, yet haunted by the specter of the undead. Here,
                  amidst the flickering torchlight and echoing footsteps,
                  adventure awaits those brave enough to traverse its winding
                  streets and shadowy alleys. ☀️☀️☀️
                </Card.Text>
              </Card.Body>
            </Card>
        </div>
          {/* Third interest point */}
           <div className="col-lg-3 mb-3 d-flex align-items-stretch">
             <Card className="w-80">
              <Card.Img
                variant="top"
                src="https://www.hyperhype.es/wp-content/uploads/2020/09/souls_and_1_more_drawn_by_tripdancer__19a28a08547e44c98de79f919bf588a1-1500x844.png"
                style={{margin: "auto", height: "40%" }}
              />
             
              <Card.Body>
              <h2>Enigmatic Depths</h2>
                <Card.Text>
                  Welcome to "The Depths," a labyrinthine underworld hidden
                  beneath the bustling city of Lordran. Dive into the shadows
                  and uncover the mysteries that lurk within this dark and
                  foreboding realm.
                </Card.Text>
              </Card.Body>
            </Card>
        </div>
          {/* Fourth interest point */}
           <div className="col-lg-3 mb-3 d-flex align-items-stretch">
             <Card className="w-80">
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5f3vdBr80hXnJfX6ovs7Krq8NnXrmkdxbLA&usqp=CAU"
                style={{ width: "100%", margin: "auto", height: "40%" }}
              />
              
              <Card.Body>
              <h2>Darkroot Garden</h2>
                <Card.Text>
                  Step into the surreal wonder of the Endless Garden, a realm of
                  boundless beauty and infinite possibilities. Nestled beyond
                  the confines of ordinary reality, this ethereal landscape
                  offers a glimpse into a realm where time and space converge in
                  a mesmerizing tapestry of colors and shapes.
                </Card.Text>
              </Card.Body>
            </Card>
        </div>
        </Row>
      </main>
    </>
  );
};

export default Interes;
