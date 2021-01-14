import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Header from '../containers/Header';

const App = () => (
  <div className="panel">
    <Header />
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
