import axios from "axios";

export const getBooks = (books) => ({
  type: "GET_BOOKS",
  payload: books, // => [{}, {}, {}]
});

export const fetchBooks = () => async (dispatch, getState) => {
  try {
    const response = await axios.get("http://localhost:4000/books/");
    console.log(response);
    //make axios call to our endpoint
    //dispatch saveBooks
    dispatch(getBooks(response.data));
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const shareABook = (
  title,
  author,
  imageURL,
  genre,
  ISBN,
  description,
  latitude,
  longitude
) => async (dispatch, getState) => {
  const token = getState().user.token;
  try {
    console.log(
      "book =" +
        title +
        " author =" +
        author +
        " imageURL " +
        imageURL +
        "genre =" +
        genre +
        "description =" +
        description
    );
    var share = {};
    share.title = title;
    share.author = author;
    share.imageUrl = imageURL;
    share.genre = genre;
    share.ISBN = ISBN;
    share.description = description;
    share.loclat = latitude;
    share.loclong = longitude;
    // share.headers = { Authorization: `Bearer ${token}` };
    await axios.post("http://localhost:4000/books/book/", share, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const searchBooks = (keyword, lat, lng) => async (
  dispatch,
  getState
) => {
  try {
    const response = await axios.get(
      `http://localhost:4000/books/search/?keyword=${keyword}&lat=${lat}&lng=${lng}`
    );
    console.log(response);
    dispatch(getBooks(response.data));
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
