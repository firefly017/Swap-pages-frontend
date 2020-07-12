import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { shareABook } from "../../store/books/actions";
import { usePosition } from "use-position";

export default function Share() {
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { latitude, longitude, error } = usePosition(true, {
    enableHighAccuracy: true,
  });

  const submitForm = () => {
    setFormSubmitted(true);
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const imageURL = document.getElementById("imageURL").value;
    const genre = document.getElementById("genre").value;
    const ISBN = document.getElementById("ISBN").value;
    const description = document.getElementById("description").value;
    console.log("is title showing? " + title);
    dispatch(
      shareABook(
        title,
        author,
        imageURL,
        genre,
        ISBN,
        description,
        latitude,
        longitude
      )
    );
  };

  if (formSubmitted) {
    return <h3>Thank you for sharing your book!!</h3>;
  }
  return (
    <div>
      <h1>Share a book that you love!</h1>
      <br />
      <form>
        <label>
          Title:
          <input type="text" id="title" name="name" />
        </label>
        <br />
        <label>
          Author:
          <input type="text" id="author" name="author" />
        </label>
        <br />
        <label>
          Image URL:
          <input type="url" id="imageURL" name="img url" />
        </label>
        <br />
        <label>
          Genre:
          <input type="text" id="genre" name="genre" />
        </label>
        <br />
        <label>
          ISBN:
          <input type="text" id="ISBN" name="ISBN" />
        </label>
        <br />
        <label>
          Description:
          <input type="text" id="description" name="short description" />
        </label>
        <br />
        <button type="button" onClick={submitForm}>
          {" "}
          Share{" "}
        </button>
      </form>
    </div>
  );
}
