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
    this.updateInput = this.updateInput.bind(this);
    this.updateSelect = this.updateSelect.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  updateInput = title => {
    this.setState({ title });
  }

  updateSelect = category => {
    this.setState({ category });
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
              onChange={e => this.updateInput(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="category">
            Book category:
            <select value={category} onChange={e => this.updateInput(e.target.value)} className="form-control" id="category" name="category" required>
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
