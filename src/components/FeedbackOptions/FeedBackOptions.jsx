import React from 'react';
import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
// import { v4 as uuidv4 } from 'uuid';

// key = {uuid()} - плохая практика, будет генерироваться нестабильный ключ каждый рендер и перерисовывать се кнопки

const FeedBackOptions = ({ options, onLeaveFeedback }) => (
  <div className={s.feedback__controls}>
    {options.map((element, index) => (
      <button
        className={s.feedback__button}
        key={`${index + 1}`}
        type="button"
        onClick={() => onLeaveFeedback(element)}
      >
        {element.slice(0, 1).toUpperCase() + element.slice(1)}
      </button>
    ))}
  </div>
);

FeedBackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedBackOptions;
