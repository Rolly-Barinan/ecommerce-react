import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setName, setAddress, setAge } from "../../redux/userReducer";
import UserDataDisplay from "./UserDataDisplay";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
  const [rentalDate, setRentalDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [days, setDays] = useState(null);

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
  const navigate = useNavigate();
  // Set up the Redux dispatch function
  const dispatch = useDispatch();

  // Get the form state from the Redux store
  const { name, address, age } = useSelector((state) => state);

  // Set up a state to track whether the form has been submitted
  const [submitted, setSubmitted] = useState(false);

  // Define a function to handle form submissions
  const handleSubmit = (event) => {
    setSubmitted(true);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => dispatch(setName(event.target.value))}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(event) => dispatch(setAddress(event.target.value))}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(event) => dispatch(setAge(event.target.value))}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {/* {submitted && <UserDataDisplay />} */}
    </>
  );
};

export default Form;
