import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FILTER, CATEGORY_FILTERS } from '../constant/constants';

const CategoryFilter = ({ filter, handleFilterChange }) => (
  <div className="form-group">
    <label htmlFor="category">
      Filter Book by category:
      <select value={filter} onChange={e => { handleFilterChange(e.target.value); }} className="form-control" id="category" name="category" required>
        {FILTER.map(category => (
          <option key={Math.floor(Math.random() * 10000)} value={category}>
            {category}
          </option>
        ))}
      </select>
    </label>
  </div>
);

CategoryFilter.propTypes = {
  filter: PropTypes.string,
  handleFilterChange: PropTypes.func.isRequired,
};

CategoryFilter.defaultProps = {
  filter: CATEGORY_FILTERS.ALL,
};

const mapStateToProps = state => ({ filter: state.filter });

export default connect(
  mapStateToProps,
)(CategoryFilter);
