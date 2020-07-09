import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../store/books/actions";
import { getBooks } from "../../store/books/selectors";
import BookCard from "../../components/BookCard";

const Home = () => {
  //   // use a selector to get the books from redux.
  const dispatch = useDispatch();
  const books = useSelector(getBooks);

  console.log("book");
  useEffect(() => {
    // dispatch an action to load books
    dispatch(fetchBooks());
  }, [dispatch]);

  const booksToRender = () =>
    books.map((book) => <BookCard key={book.id} {...book} />);

  return <div>{booksToRender()} </div>;
};

export default Home;
