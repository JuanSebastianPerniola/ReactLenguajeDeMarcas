import React from "react";
import Card from "react-bootstrap/Card";

const Inicio = () => {
  return (
    <>
      <div className="text-center">
        <h1
          className="position-relative"
          style={{ margin: "auto", width: "80%" }}
        >
          Welcome to Kingdom of Lordran!
        </h1>
      </div>
      <Card style={{ margin: "auto", width: "80%" }}>
        <Card.Img
          variant="top"
          src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/07/Dark-Souls-Lordran-detailed-map-by-judson-Cowan.jpeg"
          style={{ width: "100%", margin: "auto" }}
        />
       
        <Card.Body>
        <h1>Welcome welcome</h1>
          <Card.Text>
            Welcome to  Kingdom of Lordran! Here, you can enjoy a variety of activities,
            such as dodging giant arrows and meeting some of our most renowned
            residents. In  Kingdom of Lordran, there are no bad days; we have sunshine
            24/7—unless our Daughter of Light happens to perish, but that is
            highly unlikely to occur anytime soon.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Inicio;
