import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useSelector, useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

import {
  setCarBrand,
  setCarCapacity,
  setCarId,
  setCarName,
  setCarPrice,
  setCarTransmission,
  setCity,
  setFirstName,
  setLastName,
  setNoDays,
  setState,
  setTotalPrice,
  setUsername,
  setZip,
} from "../../redux/userReducer";

const Rentform = ({ car }) => {
  const [validated, setValidated] = useState(false);
  const [rentalDate, setRentalDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [days, setDays] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const calculateDays = () => {
      if (rentalDate && returnDate) {
        const oneDay = 24 * 60 * 60 * 1000; // number of milliseconds in a day
        const rentalTime = rentalDate.getTime();
        const returnTime = returnDate.getTime();
        const diffTime = returnTime - rentalTime;
        const diffDays = Math.round(diffTime / oneDay);
        setDays(diffDays);
      }
    };
    calculateDays();
  }, [rentalDate, returnDate]);

  // Set up the Redux dispatch function

  // Get the form state from the Redux store
  const { firstName, lastName, username, city, state, zip } = useSelector(
    (state) => state
  );

  const handleSubmit = (event) => {

    dispatch(setTotalPrice(car.priceRate * days));
    dispatch(setCarId(car._id));
    dispatch(setCarName(car.name));
    dispatch(setCarBrand(car.brand));
    dispatch(setCarTransmission(car.category));
    dispatch(setCarCapacity(car.capacity));
    dispatch(setCarPrice(car.priceRate));
    dispatch(setNoDays(days));


    setValidated(true);
    navigate("/receipt");
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              name=" firstName"
              value={firstName}
              placeholder="First name"
              onChange={(event) => dispatch(setFirstName(event.target.value))}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              name="lastName"
              value={lastName}
              placeholder="Last name"
              onChange={(event) => dispatch(setLastName(event.target.value))}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                name="username"
                value={username}
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                onChange={(event) => dispatch(setUsername(event.target.value))}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              name="city"
              value={city}
              onChange={(event) => dispatch(setCity(event.target.value))}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              placeholder="State"
              name="state"
              value={state}
              onChange={(event) => dispatch(setState(event.target.value))}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              type="text"
              placeholder="Zip"
              name="zip"
              value={zip}
              onChange={(event) => dispatch(setZip(event.target.value))}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Rent Date:</Form.Label>{" "}
              <DatePicker
                id="rentalDate"
                selected={rentalDate}
                onChange={(date) => setRentalDate(date)}
                dateFormat="MM/dd/yyyy"
                isClearable
                placeholderText="Select a date"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Return Date:</Form.Label>{" "}
              <DatePicker
                id="returnDate"
                selected={returnDate}
                onChange={(date) => setReturnDate(date)}
                dateFormat="MM/dd/yyyy"
                isClearable
                placeholderText="Select a date"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Number of Days: {days} days </Form.Label>{" "}
            </Form.Group>
          </Col>
        </Row>


        <Button type="submit">Confirm</Button>
      </Form>
    </>
  );
};

export default Rentform;
