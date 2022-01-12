import React from "react";
import PropTypes from "prop-types";
import Body from "./Body";

function Books(props) {
  return (
    <div>
      <ul className='flex '>
        <Body />
        <Body />
        <Body />
        <Body />
        <Body />
      </ul>
    </div>
  );
}

Books.propTypes = {};

export default Books;
