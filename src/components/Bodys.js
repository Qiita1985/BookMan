import React from "react";
import Body from "./Body";

const Bodys = ({ books }) => {
  if (!books.Items) return null;
  return (
    <div className="flex-wrap flex bg-white mx-10 py-10 rounded-lg w-800 border-solid">
      {books.Items.map((book, index) => {
        return <Body key={index} book={book}></Body>;
      })}
    </div>
  );
};

export default Bodys;
