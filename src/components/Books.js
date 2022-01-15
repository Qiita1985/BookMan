import React from "react";
import PropTypes from "prop-types";
import Body from "./Body";

function Books(author) {
  return (
    <ul>
      <ul className='flex '>
        <Body author={author} />
        <Body />
        <Body />
        <Body />
        <Body />
      </ul>
    </ul>
  );
}

Books.propTypes = {};

export default Books;
