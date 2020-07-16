import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { shareABook } from "../../store/books/actions";
import { usePosition } from "use-position";
import { Col, Form, Button } from "react-bootstrap";

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
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            // value={wordEn}
            // onChange={(event) => setTitle(event.target.value)}
            type="text"
            id="title"
            // autocomplete="off"
            placeholder="Enter title"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Author</Form.Label>
          <Form.Control
            // value={wordEn}
            // onChange={(event) => setAuthor(event.target.value)}
            type="text"
            id="author"
            // autocomplete="off"
            placeholder="Enter author"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            // value={wordEn}
            // onChange={(event) => setImageUrl(event.target.value)}
            type="text"
            id="imageURL"
            // autocomplete="off"
            placeholder="Enter Image URL"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Genre</Form.Label>
          <Form.Control
            // value={wordEn}
            // onChange={(event) => setGenre(event.target.value)}
            type="text"
            id="genre"
            // autocomplete="off"
            placeholder="Enter Genre"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>ISBN</Form.Label>
          <Form.Control
            // value={wordEn}
            // onChange={(event) => setISBN(event.target.value)}
            type="text"
            id="ISBN"
            // autocomplete="off"
            placeholder="Enter ISBN"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            // value={wordEn}
            // onChange={(event) => setDescription(event.target.value)}
            type="text"
            id="description"
            // autocomplete="off"
            placeholder="Enter a short description"
            required
          />
        </Form.Group>

        <Form.Group className="mt-5">
          {/* <Link to="/createcard"> */}
          <Button variant="primary" type="submit" onClick={submitForm}>
            Submit
          </Button>
          {/* </Link> */}
        </Form.Group>
      </Form>
      {/* <form>
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
      </form> */}
    </div>
  );
}
