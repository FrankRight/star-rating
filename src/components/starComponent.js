import React, { useState } from "react";
import Star from "./Star";

const createArray = (length) => [...Array(length)];

function StarComponent({ style = {}, totalStars, ...props }) {
  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <>
      <div style={{ ...style }} {...props}>
        {createArray(totalStars).map((n, i) => (
          <Star
            key={i}
            selected={selectedStars > i}
            onSelect={() => setSelectedStars(i + 1)}
          />
        ))}
      </div>

      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}

export default StarComponent;
