import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import Header from 'components/Header/Header';

import breakfastPhoto from '../../assets/images/breakfast.jpg';
import Semolina from '../../assets/images/Semolina.png';

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
              <Link to="semolina" className={styles.recipeBtn} type="button">
                Look recipe
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breakfast;
