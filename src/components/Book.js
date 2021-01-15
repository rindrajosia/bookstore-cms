import React from 'react';
import PropTypes from 'prop-types';
import Stat from '../assets/1.png';

const Book = ({ book, removeBook }) => {
  const { id, title, category } = book;
  return (
    <div className="lesson-panel">
      <div className="left">
        <div className="descripton">
          <h5 className="title-categories">{category}</h5>
          <h3 className="title-book">
            {title}
          </h3>
          <span className="author">
            Suzanne Collins-
            {id}
          </span>
        </div>
        <div className="option">
          <span className="comments">Comments</span>
          <button className="remove" type="button" onClick={() => removeBook(book)}>Remove Book</button>
          <span className="edit">Edit</span>
        </div>
      </div>
      <div className="center">
        <img className="oval" src={Stat} alt="img" />
        <div className="stat">
          <p className="percent-complete">64%</p>
          <span className="completed">Completed</span>
        </div>
      </div>
      <div className="right">
        <div className="chapter">
          <h5 className="chapter-title">CURRENT CHAPTER</h5>
          <h3 className="chapter-number">Chapter 17</h3>
        </div>
        <button className="rectangle" type="button" name="button">
          <span className="update">UPDATE PROGRESS</span>
        </button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.oneOfType([PropTypes.object]).isRequired,
  removeBook: PropTypes.func.isRequired,
};
export default Book;
