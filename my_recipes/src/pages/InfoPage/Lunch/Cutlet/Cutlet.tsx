import React, { ReactElement } from 'react';

import Header from 'components/Header/Header';

import cutlet from '../../../../assets/images/cutlet.jpg';
import timeImg from '../../../../assets/images/time.png';

import styles from './Cutlet.module.scss';

const Cutlet = (): ReactElement => {
  return (
    <div className={styles.infoPage}>
      <Header />

      <div className="container">
        <div className={styles.title}>
          <p>Recipe cutlet</p>
        </div>

        <div className={styles.mainContainer}>
          <img className={styles.mainImg} src={cutlet} alt="cutlet" />
          <div className={styles.subInfo}>
            <img src={timeImg} alt="time" />
            <p className={styles.subInfoTitle}>
              Cooking time: <b>60 minutes</b>
            </p>
          </div>

          <div className={styles.ingredients}>
            <p className={styles.ingredientsTitle}>Ingredients</p>
            <div className={styles.ingredientsItems}>
              <p>
                &bull; <b>500</b> gr minced meat (beef and pork)
              </p>
              <p>
                &bull; <b>100</b> gr of onion (1 onion)
              </p>
              <p>
                &bull; <b>80</b> gr of white bread (2 pieces without crust)
              </p>
              <p>
                &bull; <b>50</b> ml of milk
              </p>
              <p>
                &bull; <b>1</b> egg
              </p>
              <p>
                &bull; <b>1/2</b> teaspoon salt
              </p>
              <p>
                &bull; <b>2</b> gr of seasoning prymat karkowka grill
              </p>
              <p>
                &bull; <b>40</b> ml of vegetable oil
              </p>
            </div>
          </div>

          <div className={styles.cooking}>
            <p className={styles.cookingTitle}>Cooking</p>
            <div className={styles.cookingSteps}>
              <p className={styles.cookingStep}>1</p>
              <p>
                Cut off all crusts from white bread. Then take a bowl. Add milk and processed white
                bread to a bowl.
              </p>
            </div>

            <div className={styles.cookingSteps}>
              <p className={styles.cookingStep}>2</p>
              <p>
                Add minced meat to this bowl. Then cut the onion into very small pieces and add to
                this bowl too.
              </p>
            </div>

            <div className={styles.cookingSteps}>
              <p className={styles.cookingStep}>3</p>
              <p>Add 1 egg to this bowl. Then you must mix all these ingredients into one mass.</p>
            </div>

            <div className={styles.cookingSteps}>
              <p className={styles.cookingStep}>4</p>
              <p>The next step is to wash your hands and leave them damp.</p>
            </div>

            <div className={styles.cookingSteps}>
              <p className={styles.cookingStep}>5</p>
              <p>
                And start beating minced meat with next rules: you should up meat to a height of 20
                cm and then throw into bowl (20 times).
              </p>
            </div>

            <div className={styles.cookingSteps}>
              <p className={styles.cookingStep}>6</p>
              <p>
                As soon as all these procedures done, you should put this bowl in the fridge for
                about 30 minutes.
              </p>
            </div>

            <div className={styles.cookingSteps}>
              <p className={styles.cookingStep}>7</p>
              <p>
                Now you need to wash your hands and leave them damp again. Then make cutlet form
                with medium size.
              </p>
            </div>

            <div className={styles.cookingSteps}>
              <p className={styles.cookingStep}>8</p>
              <p>Heat the pan and add some vegetable oil. And put all cutlets to this pan.</p>
            </div>

            <div className={styles.cookingSteps}>
              <p className={styles.cookingStep}>9</p>
              <p>
                Your cutlets are ready! Now you can add a yummy delicious side to these cutlets. For
                example, it can be: mashed potatoes, rice, buckwheat or pasta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cutlet;
