import React from "react";
import Body from "./Body";

const Bodys = ({ books , title }) => {
  if (!books.Items) return <div>hello</div>;
  return (
    <div className='rounded-lg w-800 border-solid bg-white mx-10 px-5 py-10'>
      <h1>{title}の検索結果です</h1>
      <div className="flex-wrap flex  mx-10 py-10 ">
        {books.Items.map((book, index) => {
          return <Body key={index} book={book}></Body>;
        })}
      </div>
    </div>
  );
};

export default Bodys;
