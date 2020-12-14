import React from 'react';
import s from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => (
  <div className={s.notification}>{message}</div>
);

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
