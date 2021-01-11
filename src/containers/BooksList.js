import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions';

import { getBookList } from '../redux/selectors';

const BooksList = ({ books, removeBook }) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };
  return (
    <table>
      <tbody>
        {books
          ? books.map(book => <Book key={book.id} book={book} removeBook={handleRemoveBook} />) : 'No Books !'}
      </tbody>
    </table>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func.isRequired,
};

BooksList.defaultProps = {
  books: [{}],
};

const mapStateToProps = state => {
  const books = getBookList(state);
  return { books };
};

export default connect(mapStateToProps, { removeBook })(BooksList);
