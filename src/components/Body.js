import React from "react";
import { Link } from "react-router-dom";

export default function Body ({ book }) {
//titleが長すぎるとき途中で止める関数
  function convertitle(string) {
    const name = string;
    if (name.length > 10) {
      const splitName = name.substring(0, 10);
      return splitName + "...";
    } else {
      return name;
    }
  }
  return (
    <div className="py-4 pr-1">
      <div className="w-180 ">
        <Link to='/bookDetail/:sbin' className="block w-32">
          <img src={book.Item.largeImageUrl} />
        </Link>
      </div>
      <div className=''>
        <div>{convertitle(book.Item.title)}</div>
        <div>{convertitle(book.Item.author)}</div>
      </div>
    </div>
  );
};