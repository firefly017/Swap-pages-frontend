import React from "react";
import { Link } from "react-router-dom";

const BookCard = (props) => {
  return (
    <div>
      <img src={props.imageUrl} alt="book" />
      <h2>{props.title}</h2>

      <Link to={`/books/${props.id}`}>View details</Link>
    </div>
  );
};

export default BookCard;
