import React from 'react';
import s from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <section className={s.container}>
    <h2 className={s.container__title}>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
