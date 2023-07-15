import React, { ReactElement } from 'react';

import Header from 'components/Header/Header';

import donutPhoto from '../../assets/images/donut.jpg';
import lunchPhoto from '../../assets/images/lunch.jpg';
import Semolina from '../../assets/images/Semolina.png';

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
            <img src={Semolina} alt="recipe" />
            <div className={styles.recipeInfo}>
              <div className={styles.recipeText}>
                <p className={styles.recipeTitle}>Semolina</p>
                <p className={styles.recipeSubTitle}>
                  Semolina is a simple dish, which need some milk and 15 minutes your time
                </p>
              </div>
              <button className={styles.recipeBtn} type="button">
                Look recipe
              </button>
            </div>
          </div>

          <div className={styles.recipe}>
            <img src={donutPhoto} alt="recipe" />
            <div className={styles.recipeInfo}>
              <div className={styles.recipeText}>
                <p className={styles.recipeTitle}>Donut</p>
                <p className={styles.recipeSubTitle}>Donut is simple dish</p>
              </div>
              <button className={styles.recipeBtn} type="button">
                Look recipe
              </button>
            </div>
          </div>

          <div className={styles.recipe}>
            <img src={donutPhoto} alt="recipe" />
            <div className={styles.recipeInfo}>
              <div className={styles.recipeText}>
                <p className={styles.recipeTitle}>Donut</p>
                <p className={styles.recipeSubTitle}>Donut is simple dish</p>
              </div>
              <button className={styles.recipeBtn} type="button">
                Look recipe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lunch;
