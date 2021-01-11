import React from 'react';

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
  }

  handleChange = e => {
    const { name } = e.target;
    const { value } = e.target;
    this.setState(prevState => ({ ...prevState, [name]: value }));
  }

  handleReset = () => {
    this.setState({ title: '', category: '' });
  }

  render() {
    const { title, category } = this.state;
    return (
      <form>
        <div className="form-group">
          <label htmlFor="title">
            Book Title:
            <input
              type="text"
              name="title"
              placeholder="Book Title"
              className="form-control"
              id="title"
              required
              value={title}
              onChange={e => this.handleChange(e)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="category">
            Book category:
            <select value={category} onChange={e => this.handleChange(e)} className="form-control" id="category" name="category" required>
              <option value="">None</option>
              {CATEGORIES.map(category => (
                <option key={Math.floor(Math.random() * 10000)} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
        </div>
        <button type="button" className="btn btn-primary">Submit</button>
        <button type="button" className="btn btn-primary" onClick={this.handleReset}>Reset</button>
      </form>
    );
  }
}

export default BooksForm;
