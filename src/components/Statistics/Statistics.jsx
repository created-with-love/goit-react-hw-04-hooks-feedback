import React from 'react';
import s from './Statistic.module.css';
import PropTypes from 'prop-types';

const Statistic = ({ good, neutral, bad, total, percent }) => (
  <ul className={s.statisic__list}>
    <li>Good: {good}</li>
    <li>Neutral: {neutral}</li>
    <li>Bad: {bad}</li>
    <li>Total: {total}</li>
    <li>Positive feedback: {percent}%</li>
  </ul>
);

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  percent: PropTypes.number,
};

export default Statistic;
