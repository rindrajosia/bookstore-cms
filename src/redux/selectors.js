export const getBooksState = store => store.books;

export const getBookList = store => (getBooksState(store) ? getBooksState(store) : null);
