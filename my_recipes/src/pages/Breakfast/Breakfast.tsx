import React, { ReactElement } from 'react';

import Header from 'components/Header/Header';

import breakfastPhoto from '../../assets/images/breakfast1.jpg';

import styles from './Breakfast.module.scss';

const Breakfast = (): ReactElement => {
  return (
    <div className={styles.breakfast}>
      <Header />

      <div className={styles.photo}>
        <div className={styles.blackFilter} />

        <div className="container">
          <div className={styles.breakfastTitle}>
            <p className={styles.photoTitle}>Breakfast is the energy for your day</p>
          </div>
        </div>

        <img src={breakfastPhoto} alt="breakfast" />
      </div>
      <div className="container">Photo</div>
    </div>
  );
};

export default Breakfast;
