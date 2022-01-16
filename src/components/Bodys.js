import React from "react";
import Body from "./Body";

const Bodys = ({ books }) => {
  if (!books.Items) return null;
    return (
      <ul>
        {books.Items.map((book, index) => {
          return <Body key={index} book={book}></Body>;
        })}
      </ul>
    );
};

export default Bodys;
