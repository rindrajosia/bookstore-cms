import { CREATE_BOOK, REMOVE_BOOK } from './actionTypes';

export const createBook = book => ({
  type: CREATE_BOOK,
  payload: {
    id: Math.floor(Math.random() * 10000),
    title: book.title,
    category: book.category,
  },
});

export const removeBook = book => ({
  type: REMOVE_BOOK,
  payload: {
    id: book.id,
  },
});
