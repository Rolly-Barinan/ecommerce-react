
import React, {useState,useEffect} from "react";
import { Row, Col } from "react-bootstrap";
// import carData from "../../carData";
import Car from "../Car";
import axios from 'axios';

const HomeScreen = () => {
  const [car, setCar] = useState([])
  useEffect(()=>{

    async function fetchCar(){
      const {data} = await axios.get('/vehicle/')
      setCar(data)
    }
    fetchCar()
  },[])
  return (
    <div>
      <h1 className="text-center"> Hot offers</h1>
      <Row>
        {car.map((cardata)=> (
            <Col sm ={12} md={6} lg ={4} xl ={3}>
                {/* <h3> {car.carName}</h3> */}

                <Car cardata ={cardata}/>
            </Col>
        ))}

      </Row>
    </div>
  );
};

export default HomeScreen;
