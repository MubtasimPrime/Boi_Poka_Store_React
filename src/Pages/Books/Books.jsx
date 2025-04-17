import React, { Suspense, useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  const [allbooks, setAllBooks] = useState([]);

  //   useEffect(() => {
  //     fetch("booksData.json")
  //       .then((res) => res.json())
  //       .then((data) => setAllBooks(data));
  //   }, []);

  //   const bookPromise = fetch("booksData.json").then((res) => res.json());

  return (
    <div>
      <h1 className="text-3xl text-center p-6">Books</h1>
      <Suspense fallback={<span>loading....</span>}>
        {data.map((singleBook) => (
          <Book key={singleBook.bookId} singleBook={singleBook}></Book>
        ))}
      </Suspense>
    </div>
  );
};

export default Books;
