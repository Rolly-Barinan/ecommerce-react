import React ,{useState,useEffect}from "react";
// import carData from "../../carData";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Image, ListGroup, Button } from "react-bootstrap";
import axios from "axios";


const CarScreen = ({ match }) => {
  const { id } = useParams();
  const[car, setCar]=useState([])
  useEffect(()=>{
    async function fetchCar(){
      const{data} = await axios.get(`/vehicle/${id}`)
      setCar(data)
    }
    fetchCar()
  },[])

  // const { id } = useParams();
  // const car = carData.find((p) => String(p._id) === id);
  return (
    <div>
      <Link to="/" className="btn btn-dark my-3">
        Go back
      </Link>
      <Row>
        <div>{id}</div>
        <Col md={6}>
          <Image src={car.image} alt={car.brand}></Image>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{car.carName}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>{car.priceRate}</h3>

            </ListGroup.Item>
            <ListGroup.Item>
           <Button className ="btn-block" type ="button"> Rent  </Button>
              
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default CarScreen;
