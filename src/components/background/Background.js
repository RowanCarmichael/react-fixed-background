import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Background.css';

const Background = ({ children, className, bringToFront, ...props }) => (
  <div className={classNames(styles.backgroundOuter, bringToFront ? styles.foreground : null)}>
    <div className={classNames(styles.backgroundInner, className)} {...props}>
      {children}
    </div>
  </div>
);

Background.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  bringToFront: PropTypes.bool,
};

Background.defaultProps = {
  className: null,
  bringToFront: false,
};

export default Background;
