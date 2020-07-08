import React, { useState } from "react";

export default function Share() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  function submitForm() {
    console.log("Submitting the form");
    setFormSubmitted(true);
  }

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
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Author:
          <input type="text" name="author" />
        </label>
        <br />
        <label>
          Image URL:
          <input type="url" name="img url" />
        </label>
        <br />
        <label>
          Genre:
          <input type="text" name="genre" />
        </label>
        <br />
        <label>
          Description:
          <input type="text" name="short description" />
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
