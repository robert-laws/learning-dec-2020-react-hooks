import React, { useState } from 'react';
import Star from './Star';

const StarRating = ({ starCount = 5 }) => {
  const [selectedStars, setSelectedStars] = useState(0);
  const createArray = (length) => [...Array(length)];

  return (
    <>
      {createArray(starCount).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {starCount}
      </p>
    </>
  );
};

export default StarRating;
