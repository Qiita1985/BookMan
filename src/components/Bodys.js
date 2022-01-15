import React from "react";
import Body from "./Body";

const Bodys = ({ books }) => {
  return (
    <ul>
      {books.map((item, index) => {
        return <Body key={index} item={item} />;
      })}
    </ul>
  );
};

export default Bodys;
