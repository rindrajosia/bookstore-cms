import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';

import { getBooksByFilter } from '../redux/selectors';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({ books, removeBook, changeFilter }) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };
  const handleFilterChange = filter => {
    changeFilter(filter);
  };

  return (
    <>
      <div className="form-group">
        <CategoryFilter handleFilterChange={handleFilterChange} />
      </div>
      <table>
        <tbody>
          {books && books.length
            ? books.map(book => <Book key={book.id} book={book} removeBook={handleRemoveBook} />) : 'No Books !'}
        </tbody>
      </table>
    </>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

BooksList.defaultProps = {
  books: [{}],
};

const mapStateToProps = state => {
  const { filter } = state;
  const books = getBooksByFilter(state, filter);
  return { books };
};

export default connect(mapStateToProps, { removeBook, changeFilter })(BooksList);
