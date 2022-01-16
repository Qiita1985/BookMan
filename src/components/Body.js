import React from "react";

const Body = ({ book }) => {
  return (
    <li className="p-2">
      <a href="https://books.rakuten.co.jp/rb/16426986/">
        <img src="https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/4246/9784088824246.jpg?_ex=200x200" />
      </a>
      <div>鬼滅の刃</div>
      <div>{book.Item.authorKana}</div>
    </li>
  );
};

export default Body;
