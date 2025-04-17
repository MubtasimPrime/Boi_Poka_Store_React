import React from "react";

import bookImage from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero py-20">
      <div className="flex flex-col lg:flex-row-reverse justify-between items-center">
        <img src={bookImage} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Boi Poka!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
