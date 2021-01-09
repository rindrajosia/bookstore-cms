import React from 'react';
import BooksList from './containers/BooksList';
import BooksForm from './containers/BooksForm';

const App = () => (
  <div className="container mt-4">
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
