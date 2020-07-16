import React from "react";

export default function DetailCard(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>{props.author}</h3>
      <img src={props.imageUrl} alt="book" />
      <br />
      <h4>Genre: {props.genre}</h4>
      <h4>ISBN: {props.ISBN}</h4>
      <br />
      <p>Description: {props.description}</p>

      <button type="button">
        <a href={"mailto:" + props.user.email}>Borrow</a>
      </button>
    </div>
  );
}
