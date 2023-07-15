import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import Header from 'components/Header/Header';

import cutlet from '../../assets/images/cutlet.jpg';
import lunchPhoto from '../../assets/images/lunch.jpg';

import styles from './Lunch.module.scss';

const Lunch = (): ReactElement => {
  return (
    <div className={styles.lunch}>
      <Header />

      <div className={styles.photo}>
        <div className={styles.blackFilter} />

        <div className="container">
          <div className={styles.lunchTitle}>
            <p className={styles.photoTitle}>Lunch is the time for a satisfying meal</p>
          </div>
        </div>

        <img src={lunchPhoto} alt="lunch" />
      </div>
      <div className="container">
        <div className={styles.title}>
          <p>See all recipes below</p>
        </div>
        <div className={styles.recipesContainer}>
          <div className={styles.recipe}>
            <img src={cutlet} alt="recipe" />
            <div className={styles.recipeInfo}>
              <div className={styles.recipeText}>
                <p className={styles.recipeTitle}>Cutlet</p>
                <p className={styles.recipeSubTitle}>Cutlet is fatty, but tasty dish</p>
              </div>
              <Link to="cutlet" className={styles.recipeBtn} type="button">
                Look recipe
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lunch;
