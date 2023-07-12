import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './HomePage.module.scss';

const HomePage = (): ReactElement => {
  return (
    <div className={styles.homePage}>
      <div className="container">
        <p className={styles.title}>What will we do now?</p>
        <div className={styles.menu}>
          <NavLink to="/breakfast" className={styles.floatingButton}>
            Breakfast
          </NavLink>
          <NavLink to="/lunch" className={styles.floatingButton}>
            Lunch
          </NavLink>
          <NavLink to="/dessert" className={styles.floatingButton}>
            Dessert
          </NavLink>
          <NavLink to="/drink" className={styles.floatingButton}>
            Drink
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
