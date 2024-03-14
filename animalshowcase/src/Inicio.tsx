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
          Welcome to our page made for dog lovers and people seeking information
          about them!
        </h1>
      </div>
      <Card className="w-80 m-auto h-70">

        <Card.Img
          variant="top"
          src="https://i.pinimg.com/originals/82/d1/43/82d143a324e2843ce58208b1c15e619a.jpg"
        />

        <Card.Body>
          <h1>This is a fan page dedicated to every dog breed!</h1>
          <Card.Text>
            Welcome to our beloved haven, where the spirit of canine
            companionship thrives and echoes in every corner. Here, amidst the
            digital landscape, we celebrate the boundless affection, unwavering
            loyalty, and captivating charm of our furry friends. Whether you're
            an ardent admirer or a devoted guardian of these four-legged
            wonders, this sanctuary welcomes you with open arms. Embark on a
            journey with us, where each click unlocks a treasure trove of
            insights, anecdotes, and heartfelt stories woven by the paw prints
            of countless dogs. Let us navigate the rich tapestry of dog breeds
            together, exploring their unique personalities, endearing quirks,
            and the profound impact they imprint on our lives. Join our
            community of kindred spirits as we honor the timeless bond between
            humans and dogs—a bond steeped in joy, love, and boundless
            companionship. Welcome, dear friend, to a world where tails wag,
            hearts melt, and the magic of dogs reigns supreme.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Inicio;
