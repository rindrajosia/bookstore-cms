import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, removeBook }) => {
  const { id, title, category } = book;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td><button type="button" className="btn btn-danger" onClick={() => removeBook(book)}>Remove Book</button></td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.oneOfType([PropTypes.object]).isRequired,
  removeBook: PropTypes.func.isRequired,
};
export default Book;
