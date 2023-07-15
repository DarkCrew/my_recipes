import React, { ReactElement } from 'react';

import Header from 'components/Header/Header';

import semolinaImg from '../../../../assets/images/Semolina.png';
import timeImg from '../../../../assets/images/time.png';

import styles from './Semolina.module.scss';

const Semolina = (): ReactElement => {
  return (
    <div className={styles.infoPage}>
      <Header />

      <div className="container">
        <div className={styles.title}>
          <p>Recipe semolina</p>
        </div>

        <div className={styles.mainContainer}>
          <img className={styles.mainImg} src={semolinaImg} alt="semolina" />
          <div className={styles.subInfo}>
            <img src={timeImg} alt="time" />
            <p className={styles.subInfoTitle}>
              Cooking time: <b>15 minutes</b>
            </p>
          </div>

          <div className={styles.ingredients}>
            <p className={styles.ingredientsTitle}>Ingredients</p>
            <div className={styles.ingredientsItems}>
              <p>
                &bull; <b>350</b> ml of milk
              </p>
              <p>
                &bull; <b>150</b> ml of water
              </p>
              <p>
                &bull; <b>3</b> tablespoons of semolina
              </p>
              <p>
                &bull; <b>1</b> pinch of salt
              </p>
              <p>
                &bull; <b>1</b> small piece of button
              </p>
            </div>
          </div>

          <div className={styles.cooking}>
            <p className={styles.cookingTitle}>Cooking</p>
            <div className={styles.cookingSteps}>
              <p className={styles.cookingStep}>1</p>
              <p>
                Take a deep plate. Add water, then add semolina. Leave this for 15 minutes to swell
                the poridge.
              </p>
            </div>

            <div className={styles.cookingSteps}>
              <p className={styles.cookingStep}>2</p>
              <p>
                Take a pot for making porridge. Add cold or warm milk. After that add sugar and
                salt, mix it. And then add water with swell semolina porridge.
              </p>
            </div>

            <div className={styles.cookingSteps}>
              <p className={styles.cookingStep}>3</p>
              <p>
                Every second you should mix the semolina porridge, so that it does not burn to
                bottom of the pot.
              </p>
            </div>

            <div className={styles.cookingSteps}>
              <p className={styles.cookingStep}>4</p>
              <p>After boiling, the porridge should cook for about 3-4 minutes.</p>
            </div>

            <div className={styles.cookingSteps}>
              <p className={styles.cookingStep}>5</p>
              <p>
                Your semolina is ready! Now you can add a piece of butter and something tasty, for
                example: jam, fresh berries, fresh fruts or something like this.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Semolina;
