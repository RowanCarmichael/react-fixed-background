import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './HorizontalScrollLayout.css';

const HorizontalScrollComponent = WrappedComponent => (
  React.cloneElement(
    WrappedComponent,
    { className: classNames(styles.horizontalScrollComponent, WrappedComponent.props.className) },
  )
);

const HorizontalScrollLayout = ({ children, className, ...props }) => (
  <div className={classNames(styles.horizontalScrollLayout, className)} {...props}>
    {React.Children.map(children, child => HorizontalScrollComponent(child))}
  </div>
);

HorizontalScrollLayout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  className: PropTypes.string,
};

HorizontalScrollLayout.defaultProps = {
  className: null,
};

export default HorizontalScrollLayout;
