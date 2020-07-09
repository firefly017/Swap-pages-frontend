import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { getBooks } from "../../store/books/selectors";
import DetailCard from "../../components/DetailCard";

const DetailPage = (params) => {
  const books = useSelector(getBooks);

  const route_parameters = useParams();

  const selectedBooks = books.filter((book) => {
    return book.id == route_parameters.book_id;
  });
  const booksToRender = () =>
    selectedBooks.map((book) => <DetailCard key={book.id} {...book} />);

  return <div>{booksToRender()}</div>;
};

export default DetailPage;
