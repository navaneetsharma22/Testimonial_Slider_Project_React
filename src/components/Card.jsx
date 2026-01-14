import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = ({ reviews }) => {
  if (!reviews) return null;

  return (
    <div>
      <div>
        <img
          src={reviews.image}
          referrerPolicy="no-referrer" // 🔴 ADDED
          alt={reviews.name}
          width="150"
          height="150"
        />
      </div>

      <p>{reviews.name}</p>
      <p>{reviews.job}</p>

      <FaQuoteLeft />
      <p>{reviews.text}</p>
      <FaQuoteRight />

      <div>
        <button>+</button>
        <button>&</button>
      </div>

      <button>Surprise Me</button>
    </div>
  );
};

export default Card;
