import { CATEGORY_FILTERS } from '../constant/constants';

export const getBooksState = store => store.books;

export const getBookList = store => (getBooksState(store) ? getBooksState(store) : null);

export const getBooksByFilter = (store, filter) => {
  const allBooks = getBookList(store).books;
  switch (filter) {
    case CATEGORY_FILTERS.ALL:
      return allBooks;
    default:
      return allBooks.filter(book => book.category === filter);
  }
};
