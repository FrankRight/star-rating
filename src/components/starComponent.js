import React from "react";
import { FaStar } from "react-icons/fa";

function StarComponent(props) {
  return (
    <>
      <h2>The Star component</h2>

      <FaStar color="red" />
      <FaStar color="red" />
      <FaStar color="red" />
      <FaStar color="grey" />
      <FaStar color="grey" />
    </>
  );
}

export default StarComponent;
