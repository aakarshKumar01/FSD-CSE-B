import React from 'react'
import './Book.css'
function Book({book}) {
  return (
    <div className='book'>
      <img src={book.image} height="100px" width="100px" alt="" />
      <h3>Title : {book.title}</h3>
      <p>Price : {book.price}</p>
    </div>
  )
}

export default Book
