import React from 'react';
import classNames from 'classnames';
import styles from '../styles/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className={classNames('container', styles.footer)}>
      <a className={styles.iconLink} href="www.facebook.com" target="_blank">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a className={styles.iconLink} href="www.twitter.com" target="_blank">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a className={styles.iconLink} href="www.instagram.com" target="_blank">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </footer>
  );
};

export default Footer;
