import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions';

const CATEGORIES = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    const { name } = e.target;
    const { value } = e.target;
    this.setState(prevState => ({ ...prevState, [name]: value }));
  }

  handleReset = () => {
    this.setState({ title: '', category: '' });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { createBook } = this.props;
    const { title, category } = this.state;
    if (title !== '' && category !== '') {
      createBook(this.state);
    }
    this.handleReset();
  }

  render() {
    const { title, category } = this.state;
    return (
      <div className="form-pannel">
        <h1 className="add-book">ADD NEW BOOK</h1>

        <form className="form">
          <input
            type="text"
            name="title"
            placeholder="Book Title"
            className="input-book"
            required
            value={title}
            onChange={e => this.handleChange(e)}
          />

          <select value={category} onChange={e => this.handleChange(e)} className="select" name="category" required>
            <option value="">None</option>
            {CATEGORIES.map(category => (
              <option key={Math.floor(Math.random() * 10000)} value={category}>
                {category}
              </option>
            ))}
          </select>

          <button type="button" className="add-rectangle" onClick={this.handleSubmit}>
            <span className="add-button">ADD BOOK</span>
          </button>
        </form>

      </div>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createBook: book => { dispatch(createBook(book)); },
});

export default connect(null, mapDispatchToProps)(BooksForm);
