import React from "react";
import { useSelector } from "react-redux";

import "react-datepicker/dist/react-datepicker.css";
import { ListGroup } from "react-bootstrap";

const Receipt = () => {
  const {
    firstName,
    lastName,
    username,
    city,
    state,
    zip,
    totalPrice,
    carId,
    carName,
    carBrand,
    carTransmission,
    carCapacity,
    carPrice,
    carDay,
  } = useSelector((state) => state);

  return (
    <>
      <h2> Transaction Receipt</h2>

      <ListGroup>
        <ListGroup.Item variant="primary">
          <h4> Car Information</h4>
        </ListGroup.Item>

        <ListGroup.Item variant="primary">car id: {carId} </ListGroup.Item>
        <ListGroup.Item variant="primary">car name:{carName} </ListGroup.Item>
        <ListGroup.Item variant="primary">car brand:{carBrand} </ListGroup.Item>
        <ListGroup.Item variant="primary">transmission: {carTransmission}</ListGroup.Item>
        <ListGroup.Item variant="primary">capacity:{carCapacity} </ListGroup.Item>
        <ListGroup.Item variant="primary">price per Day:{carPrice} </ListGroup.Item>
        <ListGroup.Item variant="primary">
          <h4> Customer Information</h4>
        </ListGroup.Item>

        <ListGroup.Item variant="primary">customer id: </ListGroup.Item>
        <ListGroup.Item variant="primary">
          first name: {firstName}
        </ListGroup.Item>
        <ListGroup.Item variant="primary">last name: {lastName}</ListGroup.Item>
        <ListGroup.Item variant="primary">username: {username}</ListGroup.Item>
        <ListGroup.Item variant="primary">city: {city}</ListGroup.Item>
        <ListGroup.Item variant="primary">state: {state}</ListGroup.Item>
        <ListGroup.Item variant="primary">Zip: {zip}</ListGroup.Item>
        <ListGroup.Item variant="primary">Contact number: </ListGroup.Item>

        <ListGroup.Item variant="primary">
          <h4> Payment Information</h4>
        </ListGroup.Item>

        <ListGroup.Item variant="primary">price/Day:{carPrice} </ListGroup.Item>
        <ListGroup.Item variant="primary">number of days:{carDay}</ListGroup.Item>
        <ListGroup.Item variant="primary">method of payment: </ListGroup.Item>
        <ListGroup.Item variant="primary">
          total price: ₱{totalPrice}.00
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default Receipt;
