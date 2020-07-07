import axios from "axios";

export const saveBooks = (books) => ({
  type: "SAVE_BOOKS",
  payload: books, // => [{}, {}, {}]
});

export const fetchBooks = () => async (dispatch, getState) => {
  try {
    const response = await axios.get("http://localhost:4000/books/");
    console.log(response);
    //make axios call to our endpoint
    //dispatch saveBooks
    dispatch(saveBooks(response.data));
  } catch (error) {
    console.log(error);
  }
};
