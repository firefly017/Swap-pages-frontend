import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../store/books/actions";
import { getBooks } from "../../store/books/selectors";
import BookCard from "../../components/BookCard";
import { searchBooks } from "../../store/books/actions";
import { usePosition } from "use-position";

const Home = () => {
  //   // use a selector to get the books from redux.
  const dispatch = useDispatch();
  const books = useSelector(getBooks);

  const searchInput = React.createRef();

  const { latitude, longitude, error } = usePosition(true, {
    enableHighAccuracy: true,
  });

  const searchBooksByKeyword = () => {
    const keyword = searchInput.current.value;
    console.log(keyword);

    dispatch(searchBooks(keyword, latitude, longitude));
  };

  console.log("book");
  useEffect(() => {
    // dispatch an action to load books
    dispatch(fetchBooks());
  }, [dispatch]);

  const booksToRender = () =>
    books.map((book) => <BookCard key={book.id} {...book} />);

  return (
    <div>
      <input type="text" ref={searchInput} placeholder="Search.." />
      <button type="submit" onClick={searchBooksByKeyword}>
        Search
      </button>
      {booksToRender()}{" "}
    </div>
  );
};

export default Home;
