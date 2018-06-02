import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Content.css';

const Content = ({ children, className, ...props }) => (
  <div className={classNames(styles.content, className)} {...props}>
    {children}
  </div>
);

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};

Content.defaultProps = {
  className: null,
};

export default Content;
