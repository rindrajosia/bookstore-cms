import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FILTER, CATEGORY_FILTERS } from '../constant/constants';

const CategoryFilter = ({ filter, handleFilterChange }) => (
  <>
    <label htmlFor="category">
      <span className="add-book">Filter Book by category:</span>
      <select className="select" value={filter} onChange={e => { handleFilterChange(e.target.value); }} id="category" name="category" required>
        {FILTER.map(category => (
          <option key={Math.floor(Math.random() * 10000)} value={category}>
            {category}
          </option>
        ))}
      </select>
    </label>
  </>
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
