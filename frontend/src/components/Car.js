import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Car = ({ cardata }) => {
  return (
    <Card className="my-5 p-4 rounded">
      <Link to={`/vehicle/${cardata._id}`}>
        <Card.Img variant="top" src={cardata.image} />{" "}
      </Link>
      <Card.Body>
        <Card.Title>{cardata.brand}</Card.Title>
        <Card.Text> ₱ {cardata.priceRate}<br></br>transmition:{cardata.category}
    
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Car;
