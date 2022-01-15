import React from 'react'
import Body from './Body'

const Bodys=({ books })=> {
  return (
    <ul>
      {books.map((book,index)=>{
      <Body key={index} book={book}/>
      })}
    </ul>
  )
}

export default Bodys
