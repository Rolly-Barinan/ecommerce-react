import React from "react";
import { useSelector } from "react-redux";
const UserDataDisplay = () => {
    const { name, address, age } = useSelector((state) => state);
  return (
    <div>
      <h2>User Data</h2>
      <p>Name: {name}</p>
      <p>Address: {address}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default UserDataDisplay;