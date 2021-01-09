import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { createStore } from 'redux';
import App from './components/App';
import books from './reducers/books';

import './assets/bootstrap.min.css';

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 10000),
      title: 'Vision of Evil',
      category: 'Horror',
    },
    {
      id: Math.floor(Math.random() * 10000),
      title: 'Considered for Evil',
      category: 'Horror',
    },
    {
      id: Math.floor(Math.random() * 10000),
      title: 'Mists of Titan',
      category: 'Sci-Fi',
    },
  ],
};

const store = createStore(books, initialState);
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement,
);
