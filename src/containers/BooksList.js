import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

import { getBookList } from '../redux/selectors';

const BooksList = ({ books }) => (
  <table>
    <tbody>
      {books
        ? books.map(book => <Book key={book.id} book={book} />) : 'No Books !'}
    </tbody>
  </table>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
};

BooksList.defaultProps = {
  books: [{}],
};

export default connect(state => ({ books: getBookList(state) }))(BooksList);
