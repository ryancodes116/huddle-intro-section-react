import React from 'react';
import classNames from 'classnames';
import styles from '../styles/Details.module.css';
import mockup from '../images/illustration-mockups.svg';

const Details = () => {
  return (
    <div className={classNames('container', styles.details)}>
      <img
        className={styles.detailsImage}
        src={mockup}
        alt="Huddle dashboard mockup"
      />
      <div className={styles.detailsText}>
        <h1 className={styles.title}>
          Build The Community Your Fans Will Love
        </h1>
        <p className={styles.text}>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button className={styles.btn}>Register</button>
      </div>
    </div>
  );
};

export default Details;
