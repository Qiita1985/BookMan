import React from "react";
import Body from "./Body";

const Bodys = ({ books }) => {
  console.log(books.Items);
  if (!books.Items)
  return null
  return (
    <ul>
      {books.Items.map((book, index) => {
        return <Body key={index}>{book.Item.title}</Body>
      })}
    </ul>
  );
};

export default Bodys;
