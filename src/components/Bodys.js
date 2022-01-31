import React from "react";
import Body from "./Body";

const Bodys = ({ books, title }) => {
  console.log(books);
  if (!books.Items)
    return (
      <div>
        <h1 className="text-5xl text-center">
          そうだ<span className="font-bold text-indigo-500">本</span>を読もう
        </h1>
        <img src="human.png" className="duration-300 transition" />
      </div>
    );
  return (
    <div>
      <div className='flex'>
        <h1 className="text-blue-400">{title}の検索結果です</h1>
        <h5 className='ml-auto'>{books.hits}件ヒットしました</h5>
      </div>
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
