import React from "react";
import Body from "./Body";

const Bodys = ({ books }) => {
  return (
    <ul>
      {books.products.map((book, index) => {
        return <Body key={index} book={book} />;
      })}
    </ul>
  );
};

export default Bodys;
