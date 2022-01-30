import React from "react";

const Body = ({ book }) => {
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
        <a href={book.Item.itemUrl} className="block w-32">
          <img src={book.Item.largeImageUrl} />
        </a>
      </div>
      <div className=''>
        <div>{convertitle(book.Item.title)}</div>
        <div>{convertitle(book.Item.author)}</div>
      </div>
    </div>
  );
};

export default Body;
