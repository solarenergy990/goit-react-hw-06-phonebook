import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  // console.log(onChange);
  // console.log(value);
  return (
    <label>
      <p className={s.label}>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={evt => onChange(evt.currentTarget.value)}
      ></input>
    </label>
  );
};

export default Filter;

Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
