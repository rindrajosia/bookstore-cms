import { CREATE_BOOK, REMOVE_BOOK } from '../actions/actionTypes';
import { initialStateBooks } from '../constant/constants';

const books = (state=initialStateBooks, action) => {
  switch (action.type) {
    case CREATE_BOOK: {
      return {
        books: [...state.books, action.payload],
      };
    }
    case REMOVE_BOOK: {
      const { id } = action.payload;
      return {
        books: state.books.filter(book => book.id !== id),
      };
    }
    default:
      return state;
  }
};

export default books;
