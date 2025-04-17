import React, { use } from "react";
import { NavLink } from "react-router";

const Book = ({ data, singleBook }) => {
  //   const data = use(bookPromise);
  console.log(singleBook);

  const {
    bookName,
    author,
    image,
    review,
    rating,
    category,
    tags,
    yearOfPublishing,
    publisher,
    bookId,
  } = singleBook;
  return (
    <NavLink to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-sm border border-gray-400 py-6">
        <figure className="p-5 bg-gray-100 w-2/3 mx-auto rounded-xl">
          <img className="h-[166px]" src={image} alt="Shoes" />
        </figure>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex justify-center gap-4">
            {" "}
            {tags.map((tag) => (
              <button className="">{tag}</button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p>Book by: {publisher}</p>
          <div className="border-t-1 border-dashed w-[80%]"></div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">{rating}</div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Book;
