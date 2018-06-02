import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Container.css';

const Container = ({ children, className, ...props }) => (
  <div className={classNames(styles.container, className)} {...props}>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};

Container.defaultProps = {
  className: null,
};

export default Container;
