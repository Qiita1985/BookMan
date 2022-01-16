import React from "react";

const Body = ({ book }) => {
  return (
    <li className="p-2">
      <a href={book.Item.itemUrl}>
        <img src={book.Item.largeImageUrl} />
      </a>
      <div>{book.Item.title}</div>
      <div>{book.Item.author}</div>
    </li>
  );
};

export default Body;
