import React from "react";

export default function DetailCard(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>{props.author}</h3>
      <img src={props.imageUrl} alt="book" />
      <br />
      <br />

      <button type="button">Borrow </button>
    </div>
  );
}
