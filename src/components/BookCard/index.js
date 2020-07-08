import React from "react";
import { Link } from "react-router-dom";

const BookCard = (props) => {
  return (
    <div>
      <img src={props.imageUrl} alt="book" />
      <h2>{props.title}</h2>

      <Link to={`/detail/${props.id}`}>
        <button type="button">View details </button>
      </Link>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default BookCard;
