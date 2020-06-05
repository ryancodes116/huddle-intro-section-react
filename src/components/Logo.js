import React from 'react';
import classNames from 'classnames';
import styles from '../styles/Logo.module.css';
import logo from '../images/logo.svg';

const Logo = () => {
  return (
    <div className={classNames('container', styles.logoWrapper)}>
      <img className={styles.logo} src={logo} alt="Huddle logo" />
    </div>
  );
};

export default Logo;
