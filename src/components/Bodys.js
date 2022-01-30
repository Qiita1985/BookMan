import React from "react";
import Body from "./Body";

const Bodys = ({ books, title }) => {
  if (!books.Items)
    return (
      <div>
        <h1 className="text-5xl text-center">
          そうだ<span className="font-bold text-indigo-500">本</span>を読もう
        </h1>
        <img src="human.png" />
      </div>
    );
  return (
    <div>
      <h1 className="text-blue-400">{title}の検索結果です</h1>
      <hr />
      <div className="flex-wrap flex  mx-10 py-10 ">
        {books.Items.map((book, index) => {
          return <Body key={index} book={book}></Body>;
        })}
      </div>
    </div>
  );
};

export default Bodys;
